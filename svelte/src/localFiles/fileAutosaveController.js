export function createFileAutosaveController({
  fileSafety,
  getActiveEntry,
  getPayloadText,
  debounceMs = 700,
  setTimeoutFn = globalThis.setTimeout,
  clearTimeoutFn = globalThis.clearTimeout,
  onStateChange = () => {},
  onSaved = () => {},
  onSkipped = () => {},
  onError = () => {},
} = {}) {
  if (!fileSafety) {
    throw new Error("FileAutosaveController requires a FileSafetyService.");
  }
  if (typeof getActiveEntry !== "function") {
    throw new Error("FileAutosaveController requires getActiveEntry.");
  }
  if (typeof getPayloadText !== "function") {
    throw new Error("FileAutosaveController requires getPayloadText.");
  }

  let saveTimer = null;
  let pendingSave = null;
  let saveQueue = Promise.resolve();

  function clearPending() {
    if (saveTimer != null) {
      clearTimeoutFn(saveTimer);
    }
    saveTimer = null;
    pendingSave = null;
  }

  function resolveCurrentSave() {
    const entry = getActiveEntry();
    if (!entry) return null;
    const text = getPayloadText(entry);
    if (!text || !text.trim()) return null;
    return { entry, text };
  }

  async function runSave(target, { manual = false } = {}) {
    const eligibility = await fileSafety.canAutosave(target.entry);
    if (!eligibility.allowed) {
      const result = {
        saved: false,
        skipped: true,
        reason: eligibility.reason,
        eligibility,
        manual,
      };
      onSkipped(result);
      return result;
    }

    const result = await fileSafety.overwrite(target.entry, target.text);
    const saved = {
      saved: true,
      skipped: false,
      manual,
      entry: target.entry,
      text: target.text,
      result,
    };
    onSaved(saved);
    return saved;
  }

  function enqueue(target, options = {}) {
    saveQueue = saveQueue
      .then(() => runSave(target, options))
      .catch((error) => {
        const failed = {
          saved: false,
          skipped: false,
          error,
          entry: target.entry,
          manual: Boolean(options.manual),
        };
        onError(failed);
        return failed;
      });
    return saveQueue;
  }

  function schedule() {
    const target = resolveCurrentSave();
    if (!target) return false;
    pendingSave = target;
    if (saveTimer != null) {
      clearTimeoutFn(saveTimer);
    }
    onStateChange({ state: "scheduled", entry: target.entry });
    saveTimer = setTimeoutFn(() => {
      const next = pendingSave;
      saveTimer = null;
      pendingSave = null;
      if (!next) return;
      onStateChange({ state: "saving", entry: next.entry });
      enqueue(next);
    }, debounceMs);
    return true;
  }

  async function flushNow() {
    const target = pendingSave || resolveCurrentSave();
    clearPending();
    if (!target) return { saved: false, skipped: true, reason: "empty" };
    onStateChange({ state: "saving", entry: target.entry });
    return enqueue(target, { manual: true });
  }

  function dispose() {
    clearPending();
  }

  return {
    schedule,
    flushNow,
    dispose,
    hasPendingSave: () => !!pendingSave,
    getSaveQueue: () => saveQueue,
  };
}
