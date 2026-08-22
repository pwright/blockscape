import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { createFileAutosaveController } from "./fileAutosaveController.js";

function createTimers() {
  let nextId = 1;
  const timers = new Map();
  return {
    setTimeout(fn, ms) {
      const id = nextId;
      nextId += 1;
      timers.set(id, { fn, ms });
      return id;
    },
    clearTimeout(id) {
      timers.delete(id);
    },
    runNext() {
      const [id, timer] = timers.entries().next().value || [];
      if (!timer) return false;
      timers.delete(id);
      timer.fn();
      return true;
    },
    count() {
      return timers.size;
    },
  };
}

function createSafety({ allowed = true, fail = false } = {}) {
  const calls = [];
  return {
    calls,
    async canAutosave(entry) {
      calls.push(["canAutosave", entry.id]);
      return allowed
        ? { allowed: true, reason: "eligible" }
        : { allowed: false, reason: "conflicted" };
    },
    async overwrite(entry, text) {
      calls.push(["overwrite", entry.id, text]);
      if (fail) throw new Error("write failed");
      return {
        path: entry.fileBinding?.target?.path || "unknown.bs",
        revision: { lastModified: 1, size: text.length },
      };
    },
  };
}

describe("FileAutosaveController", () => {
  it("debounces autosave and saves the latest active payload", async () => {
    const timers = createTimers();
    const entry = {
      id: "entry-1",
      fileBinding: { target: { path: "maps/current.bs" } },
    };
    let text = "first";
    const safety = createSafety();
    const saved = [];
    const controller = createFileAutosaveController({
      fileSafety: safety,
      getActiveEntry: () => entry,
      getPayloadText: () => text,
      debounceMs: 50,
      setTimeoutFn: timers.setTimeout,
      clearTimeoutFn: timers.clearTimeout,
      onSaved: (result) => saved.push(result),
    });

    assert.equal(controller.schedule(), true);
    text = "second";
    assert.equal(controller.schedule(), true);
    assert.equal(timers.count(), 1);
    timers.runNext();
    await controller.getSaveQueue();

    assert.deepEqual(safety.calls, [
      ["canAutosave", "entry-1"],
      ["overwrite", "entry-1", "second"],
    ]);
    assert.equal(saved.length, 1);
    assert.equal(saved[0].saved, true);
  });

  it("does not autosave empty or unbound current payloads", () => {
    const timers = createTimers();
    const controller = createFileAutosaveController({
      fileSafety: createSafety(),
      getActiveEntry: () => null,
      getPayloadText: () => "{}",
      setTimeoutFn: timers.setTimeout,
      clearTimeoutFn: timers.clearTimeout,
    });

    assert.equal(controller.schedule(), false);
    assert.equal(timers.count(), 0);
  });

  it("skips conflicted or disconnected entries through safety eligibility", async () => {
    const timers = createTimers();
    const entry = { id: "entry-1" };
    const safety = createSafety({ allowed: false });
    const skipped = [];
    const controller = createFileAutosaveController({
      fileSafety: safety,
      getActiveEntry: () => entry,
      getPayloadText: () => "{}",
      setTimeoutFn: timers.setTimeout,
      clearTimeoutFn: timers.clearTimeout,
      onSkipped: (result) => skipped.push(result),
    });

    controller.schedule();
    timers.runNext();
    await controller.getSaveQueue();

    assert.equal(skipped.length, 1);
    assert.equal(skipped[0].reason, "conflicted");
    assert.deepEqual(safety.calls, [["canAutosave", "entry-1"]]);
  });

  it("reports failed writes and keeps the queue alive", async () => {
    const timers = createTimers();
    const entry = { id: "entry-1", fileBinding: { target: { path: "a.bs" } } };
    const errors = [];
    const controller = createFileAutosaveController({
      fileSafety: createSafety({ fail: true }),
      getActiveEntry: () => entry,
      getPayloadText: () => "{}",
      setTimeoutFn: timers.setTimeout,
      clearTimeoutFn: timers.clearTimeout,
      onError: (result) => errors.push(result),
    });

    controller.schedule();
    timers.runNext();
    const result = await controller.getSaveQueue();

    assert.equal(result.saved, false);
    assert.equal(errors.length, 1);
    assert.match(errors[0].error.message, /write failed/);
  });

  it("flushes pending saves immediately", async () => {
    const timers = createTimers();
    const entry = { id: "entry-1", fileBinding: { target: { path: "a.bs" } } };
    const safety = createSafety();
    const controller = createFileAutosaveController({
      fileSafety: safety,
      getActiveEntry: () => entry,
      getPayloadText: () => "{}",
      setTimeoutFn: timers.setTimeout,
      clearTimeoutFn: timers.clearTimeout,
    });

    controller.schedule();
    const result = await controller.flushNow();

    assert.equal(result.saved, true);
    assert.equal(timers.count(), 0);
    assert.deepEqual(safety.calls, [
      ["canAutosave", "entry-1"],
      ["overwrite", "entry-1", "{}"],
    ]);
  });
});
