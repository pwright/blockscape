import assert from "node:assert/strict";
import { describe, it } from "node:test";

import {
  BROWSER_FILE_PROVIDER,
  createBrowserFileBinding,
} from "./fileBinding.js";
import {
  createBrowserRecoveryDraftKey,
  createRecoveryDraftStore,
} from "./recoveryDraftStore.js";

function createMemoryAdapter() {
  const records = new Map();
  return {
    async get(key) {
      return records.get(key);
    },
    async put(record) {
      records.set(record.filename, record);
      return record.filename;
    },
    async delete(key) {
      records.delete(key);
    },
    has(key) {
      return records.has(key);
    },
  };
}

describe("recovery draft store", () => {
  it("keys drafts by entry id plus browser save target", () => {
    const entry = {
      id: "model-1",
      fileBinding: createBrowserFileBinding("maps/current.bs"),
    };

    assert.equal(
      createBrowserRecoveryDraftKey(entry, entry.fileBinding.target.path),
      `${BROWSER_FILE_PROVIDER}:model-1:maps%2Fcurrent.bs`
    );
  });

  it("retains drafts after failed writes or provider loss", async () => {
    const adapter = createMemoryAdapter();
    const store = createRecoveryDraftStore({
      adapter,
      getNow: () => 123,
    });
    const entry = { id: "model-1" };

    const draft = await store.remember({
      entry,
      path: "maps/current.bs",
      text: "{ draft: true }",
      metadata: { reason: "write-failed" },
    });
    const restored = await store.get({ entry, path: "maps/current.bs" });

    assert.equal(adapter.has(draft.filename), true);
    assert.equal(restored.text, "{ draft: true }");
    assert.equal(restored.updatedAt, 123);
    assert.deepEqual(restored.metadata, { reason: "write-failed" });
  });

  it("clears drafts only after successful write to the same binding", async () => {
    const adapter = createMemoryAdapter();
    const store = createRecoveryDraftStore({ adapter });
    const entry = { id: "model-1" };
    const draft = await store.remember({
      entry,
      path: "maps/current.bs",
      text: "{}",
    });

    assert.equal(
      await store.clearAfterSuccessfulWrite({
        entry,
        path: "maps/current.bs",
        writtenPath: "maps/copy.bs",
      }),
      false
    );
    assert.equal(adapter.has(draft.filename), true);

    assert.equal(
      await store.clearAfterSuccessfulWrite({
        entry,
        path: "maps/current.bs",
        writtenPath: "maps/current.bs",
      }),
      true
    );
    assert.equal(adapter.has(draft.filename), false);
  });

  it("rejects drafts without a stable entry id", async () => {
    const store = createRecoveryDraftStore({ adapter: createMemoryAdapter() });

    await assert.rejects(
      () => store.remember({ entry: {}, path: "maps/current.bs", text: "{}" }),
      /entry id/
    );
  });
});
