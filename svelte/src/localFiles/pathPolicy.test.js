import assert from "node:assert/strict";
import { describe, it } from "node:test";

import {
  assertProviderRelativePath,
  normalizeProviderRelativePath,
  validateProviderRelativePath,
} from "./pathPolicy.js";

describe("provider-relative path policy", () => {
  it("accepts normalized provider-relative .bs paths", () => {
    assert.equal(normalizeProviderRelativePath("map.bs"), "map.bs");
    assert.equal(
      normalizeProviderRelativePath("folder/nested/map.BS"),
      "folder/nested/map.BS"
    );
    assert.equal(
      normalizeProviderRelativePath("folder\\nested\\map.bs"),
      "folder/nested/map.bs"
    );
  });

  it("rejects empty, absolute, and malformed segments", () => {
    const invalid = [
      "",
      "/map.bs",
      "C:/maps/map.bs",
      "folder//map.bs",
      "folder/./map.bs",
      "folder/../map.bs",
      "folder/",
    ];

    invalid.forEach((path) => {
      assert.equal(validateProviderRelativePath(path).valid, false, path);
      assert.equal(normalizeProviderRelativePath(path), "", path);
    });
  });

  it("rejects hidden path segments by default", () => {
    assert.equal(normalizeProviderRelativePath(".hidden.bs"), "");
    assert.equal(normalizeProviderRelativePath("folder/.hidden/map.bs"), "");
    assert.equal(
      normalizeProviderRelativePath(".hidden.bs", { allowHidden: true }),
      ".hidden.bs"
    );
  });

  it("requires a .bs extension", () => {
    assert.equal(normalizeProviderRelativePath("map.json"), "");
    assert.equal(assertProviderRelativePath("map.bs"), "map.bs");
    assert.throws(() => assertProviderRelativePath("map.json"), /Invalid/);
  });
});
