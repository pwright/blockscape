import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { createBrowserFileProvider } from "./browserFileProvider.js";

function makeFileHandle(text = "", lastModified = 100) {
  let content = text;
  let modified = lastModified;
  return {
    kind: "file",
    async getFile() {
      return {
        size: content.length,
        lastModified: modified,
        async text() {
          return content;
        },
      };
    },
    async createWritable() {
      return {
        async write(next) {
          content = next;
          modified += 1;
        },
        async close() {},
        async abort() {},
      };
    },
    readContent() {
      return content;
    },
  };
}

function makeDirectoryHandle(name, entries = {}) {
  const children = { ...entries };
  return {
    kind: "directory",
    name,
    async queryPermission() {
      return "granted";
    },
    async requestPermission() {
      return "granted";
    },
    async getDirectoryHandle(childName, { create = false } = {}) {
      if (!children[childName] && create) {
        children[childName] = makeDirectoryHandle(childName);
      }
      const child = children[childName];
      if (!child || child.kind !== "directory") {
        throw new Error(`Missing directory: ${childName}`);
      }
      return child;
    },
    async getFileHandle(childName, { create = false } = {}) {
      if (!children[childName] && create) {
        children[childName] = makeFileHandle("");
      }
      const child = children[childName];
      if (!child || child.kind !== "file") {
        throw new Error(`Missing file: ${childName}`);
      }
      return child;
    },
    async removeEntry(childName) {
      delete children[childName];
    },
    async *entries() {
      for (const entry of Object.entries(children)) {
        yield entry;
      }
    },
    child(childName) {
      return children[childName];
    },
  };
}

describe("BrowserFileProvider", () => {
  it("connects through a directory picker and lists normalized .bs files", async () => {
    const root = makeDirectoryHandle("workspace", {
      "map.bs": makeFileHandle("root", 10),
      ".hidden.bs": makeFileHandle("hidden", 11),
      notes: makeDirectoryHandle("notes", {
        "nested.bs": makeFileHandle("nested", 20),
        "readme.md": makeFileHandle("ignored", 30),
      }),
    });
    const provider = createBrowserFileProvider({
      win: { showDirectoryPicker: async () => root },
    });

    const workspace = await provider.connectWorkspace();
    const files = await provider.listFiles();

    assert.equal(workspace.connected, true);
    assert.deepEqual(
      files.map((file) => file.path),
      ["map.bs", "notes/nested.bs"]
    );
    assert.deepEqual(files[0].revision, { lastModified: 10, size: 4 });
  });

  it("reads, writes, deletes, and resolves provider-relative targets", async () => {
    const root = makeDirectoryHandle("workspace", {
      maps: makeDirectoryHandle("maps", {
        "current.bs": makeFileHandle("old", 50),
      }),
    });
    const provider = createBrowserFileProvider({ directoryHandle: root });
    await provider.reconnectWorkspace();

    const read = await provider.readFile("maps/current.bs");
    const write = await provider.writeFile("maps/current.bs", "new text");
    const target = await provider.resolveTarget("maps/current.bs");
    const revision = await provider.getRevision("maps/current.bs");
    await provider.deleteFile("maps/current.bs");

    assert.equal(read.text, "old");
    assert.equal(write.path, "maps/current.bs");
    assert.equal(target.filename, "current.bs");
    assert.deepEqual(revision, { lastModified: 51, size: 8 });
    await assert.rejects(
      () => provider.readFile("maps/current.bs"),
      /Missing file/
    );
  });

  it("rejects invalid save targets before touching handles", async () => {
    const root = makeDirectoryHandle("workspace");
    const provider = createBrowserFileProvider({ directoryHandle: root });
    await provider.reconnectWorkspace();

    await assert.rejects(
      () => provider.writeFile("../map.bs", "text"),
      /Invalid local file path/
    );
  });
});
