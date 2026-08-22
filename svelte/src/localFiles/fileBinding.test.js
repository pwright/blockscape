import assert from "node:assert/strict";
import { describe, it } from "node:test";

import {
  BROWSER_FILE_PROVIDER,
  bindingFromBrowserAutosavePath,
  createBrowserFileBinding,
  ensureBrowserFileBinding,
  getBrowserFileBindingPath,
  isBrowserFileBinding,
  normalizeRevisionSnapshot,
  sameRevisionSnapshot,
} from "./fileBinding.js";

describe("browser file bindings", () => {
  it("creates the browser fileBinding shape", () => {
    const binding = createBrowserFileBinding("maps/current.bs", {
      revision: { lastModified: "100", size: "22" },
      autosaveEnabled: false,
    });

    assert.deepEqual(binding, {
      provider: BROWSER_FILE_PROVIDER,
      target: { kind: "workspace-file", path: "maps/current.bs" },
      displayPath: "maps/current.bs",
      revision: { lastModified: 100, size: 22 },
      autosaveEnabled: false,
    });
    assert.equal(isBrowserFileBinding(binding), true);
    assert.equal(getBrowserFileBindingPath(binding), "maps/current.bs");
  });

  it("converts browserAutosavePath lazily without touching sourcePath", () => {
    const entry = {
      browserAutosavePath: "legacy/map.bs",
      sourcePath: "server/map.bs",
    };

    const binding = ensureBrowserFileBinding(entry);

    assert.equal(binding.target.path, "legacy/map.bs");
    assert.equal(entry.fileBinding, binding);
    assert.equal(entry.sourcePath, "server/map.bs");
  });

  it("ignores invalid browserAutosavePath values", () => {
    const entry = { browserAutosavePath: "../map.bs" };

    assert.equal(bindingFromBrowserAutosavePath(entry.browserAutosavePath), null);
    assert.equal(ensureBrowserFileBinding(entry), null);
    assert.equal("fileBinding" in entry, false);
  });

  it("compares browser revision snapshots", () => {
    assert.deepEqual(normalizeRevisionSnapshot({ lastModified: "5", size: 9 }), {
      lastModified: 5,
      size: 9,
    });
    assert.equal(
      sameRevisionSnapshot(
        { lastModified: 5, size: 9 },
        { lastModified: "5", size: "9" }
      ),
      true
    );
    assert.equal(
      sameRevisionSnapshot({ lastModified: 5, size: 9 }, { lastModified: 6, size: 9 }),
      false
    );
    assert.equal(sameRevisionSnapshot(null, { lastModified: 5, size: 9 }), false);
  });
});
