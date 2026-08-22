import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { createBrowserFileBinding } from "./fileBinding.js";
import {
  createFileSafetyService,
  FILE_SAFETY_ACTIONS,
  FILE_SAFETY_STATES,
} from "./fileSafetyService.js";

function createProvider({
  connected = true,
  revisions = {},
  reads = {},
  missing = [],
} = {}) {
  const written = [];
  return {
    written,
    isConnected() {
      return connected;
    },
    async getRevision(path) {
      if (missing.includes(path)) {
        throw new Error(`Missing file: ${path}`);
      }
      if (!(path in revisions)) {
        throw new Error(`Provider unavailable for: ${path}`);
      }
      return revisions[path];
    },
    async readFile(path) {
      const file = reads[path];
      if (!file) throw new Error(`Missing file: ${path}`);
      return { path, ...file };
    },
    async writeFile(path, text) {
      const revision = {
        lastModified: Date.now(),
        size: text.length,
      };
      revisions[path] = revision;
      written.push({ path, text, revision });
      return { path, revision };
    },
    async reconnectWorkspace() {
      connected = true;
      return { connected: true, permissionState: "granted" };
    },
  };
}

function createDraftStore() {
  const drafts = new Map();
  const keyFor = ({ entry, path }) => `${entry.id}:${path}`;
  return {
    async remember(input) {
      const record = { ...input, key: keyFor(input) };
      drafts.set(record.key, record);
      return record;
    },
    async get(input) {
      return drafts.get(keyFor(input)) || null;
    },
    async clear(input) {
      drafts.delete(keyFor(input));
    },
    async clearAfterSuccessfulWrite({ entry, path, writtenPath }) {
      if (path !== writtenPath) return false;
      drafts.delete(keyFor({ entry, path }));
      return true;
    },
  };
}

describe("FileSafetyService", () => {
  it("requires an explicit browser file binding for autosave", async () => {
    const service = createFileSafetyService({
      provider: createProvider(),
      isDirty: () => true,
    });

    assert.deepEqual(await service.canAutosave({ id: "entry-1" }), {
      allowed: false,
      reason: "unbound",
    });
  });

  it("allows autosave only when bound, dirty, connected, and unchanged", async () => {
    const entry = {
      id: "entry-1",
      fileBinding: createBrowserFileBinding("maps/current.bs", {
        revision: { lastModified: 1, size: 10 },
      }),
    };
    const service = createFileSafetyService({
      provider: createProvider({
        revisions: {
          "maps/current.bs": { lastModified: 1, size: 10 },
        },
      }),
      isDirty: () => true,
    });

    const decision = await service.canAutosave(entry);

    assert.equal(decision.allowed, true);
    assert.equal(decision.reason, "eligible");
    assert.equal(decision.state.state, FILE_SAFETY_STATES.DIRTY);
  });

  it("marks dirty entries conflicted when the backing revision changed", async () => {
    const entry = {
      id: "entry-1",
      fileBinding: createBrowserFileBinding("maps/current.bs", {
        revision: { lastModified: 1, size: 10 },
      }),
    };
    const service = createFileSafetyService({
      provider: createProvider({
        revisions: {
          "maps/current.bs": { lastModified: 2, size: 10 },
        },
      }),
      isDirty: () => true,
    });

    const decision = await service.getSaveThroughBindingDecision(entry);

    assert.equal(decision.allowed, false);
    assert.equal(decision.reason, "conflicted");
    assert.equal(decision.state, FILE_SAFETY_STATES.CONFLICTED);
    assert.deepEqual(decision.actions, [
      FILE_SAFETY_ACTIONS.RELOAD_FROM_DISK,
      FILE_SAFETY_ACTIONS.SAVE_COPY,
      FILE_SAFETY_ACTIONS.OVERWRITE,
    ]);
  });

  it("allows explicit overwrite for a conflicted binding", async () => {
    const entry = {
      id: "entry-1",
      fileBinding: createBrowserFileBinding("maps/current.bs", {
        revision: { lastModified: 1, size: 10 },
      }),
    };
    const service = createFileSafetyService({
      provider: createProvider({
        revisions: {
          "maps/current.bs": { lastModified: 2, size: 10 },
        },
      }),
      isDirty: () => true,
    });

    const decision = await service.getSaveThroughBindingDecision(entry, {
      overwrite: true,
    });

    assert.equal(decision.allowed, true);
    assert.equal(decision.reason, "overwrite");
  });

  it("marks file-backed entries disconnected when the provider is unavailable", async () => {
    const entry = {
      id: "entry-1",
      fileBinding: createBrowserFileBinding("maps/current.bs", {
        revision: { lastModified: 1, size: 10 },
      }),
    };
    const service = createFileSafetyService({
      provider: createProvider({ connected: false }),
      isDirty: () => true,
    });

    const state = await service.checkExternalRevision(entry);

    assert.equal(state.state, FILE_SAFETY_STATES.DISCONNECTED);
    assert.equal(state.disconnected, true);
    assert.deepEqual(state.actions, [
      FILE_SAFETY_ACTIONS.RECONNECT,
      FILE_SAFETY_ACTIONS.SAVE_COPY,
    ]);
  });

  it("requires confirmation before Save As overwrites an existing target", async () => {
    const service = createFileSafetyService({
      provider: createProvider({
        revisions: {
          "maps/existing.bs": { lastModified: 1, size: 10 },
        },
        missing: ["maps/missing.bs"],
      }),
    });

    assert.deepEqual(await service.checkSaveAsCollision("maps/missing.bs"), {
      allowed: true,
      path: "maps/missing.bs",
      collision: false,
      revision: null,
      reason: "available",
    });
    const collision = await service.checkSaveAsCollision("maps/existing.bs");
    assert.equal(collision.allowed, false);
    assert.equal(collision.reason, "collision");
    assert.equal(
      (await service.checkSaveAsCollision("maps/existing.bs", {
        overwrite: true,
      })).allowed,
      true
    );
  });

  it("reloads, writes copies, overwrites, and handles recovery draft actions", async () => {
    const entry = {
      id: "entry-1",
      fileBinding: createBrowserFileBinding("maps/current.bs", {
        revision: { lastModified: 1, size: 10 },
      }),
    };
    const drafts = createDraftStore();
    const provider = createProvider({
      revisions: {
        "maps/current.bs": { lastModified: 2, size: 11 },
        "maps/copy.bs": { lastModified: 3, size: 8 },
      },
      reads: {
        "maps/current.bs": {
          text: "disk",
          revision: { lastModified: 2, size: 4 },
        },
      },
    });
    const service = createFileSafetyService({
      provider,
      recoveryDrafts: drafts,
      isDirty: () => true,
    });

    const reload = await service.reloadFromDisk(entry);
    assert.equal(reload.text, "disk");
    assert.deepEqual(entry.fileBinding.revision, { lastModified: 2, size: 4 });

    const copy = await service.saveCopy({
      entry,
      path: "maps/copy.bs",
      text: "copy text",
    });
    assert.equal(copy.action, FILE_SAFETY_ACTIONS.SAVE_COPY);
    assert.equal(provider.written.at(-1).path, "maps/copy.bs");

    const overwrite = await service.overwrite(entry, "overwrite text");
    assert.equal(overwrite.action, FILE_SAFETY_ACTIONS.OVERWRITE);
    assert.deepEqual(entry.fileBinding.revision, overwrite.revision);

    await drafts.remember({
      entry,
      path: "maps/current.bs",
      text: "draft text",
    });
    assert.equal(
      (await service.restoreRecoveryDraft(entry)).draft.text,
      "draft text"
    );
    assert.equal(await service.discardRecoveryDraft(entry), true);
    assert.equal(await service.getRecoveryDraft(entry), null);
  });
});
