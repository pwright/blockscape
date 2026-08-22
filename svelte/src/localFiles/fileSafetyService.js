import {
  getBrowserFileBindingPath,
  isBrowserFileBinding,
  sameRevisionSnapshot,
} from "./fileBinding.js";
import { assertProviderRelativePath } from "./pathPolicy.js";

export const FILE_SAFETY_STATES = {
  UNBOUND: "unbound",
  CLEAN: "clean",
  DIRTY: "dirty",
  CONFLICTED: "conflicted",
  DISCONNECTED: "disconnected",
};

export const FILE_SAFETY_ACTIONS = {
  RELOAD_FROM_DISK: "reload-from-disk",
  SAVE_COPY: "save-copy",
  OVERWRITE: "overwrite",
  RECONNECT: "reconnect",
  RESTORE_DRAFT: "restore-draft",
  DISCARD_DRAFT: "discard-draft",
};

function getBinding(entry) {
  return isBrowserFileBinding(entry?.fileBinding) ? entry.fileBinding : null;
}

function getBindingPath(entry) {
  return getBrowserFileBindingPath(entry?.fileBinding);
}

function isMissingFileError(error) {
  const name = (error?.name || "").toString();
  const message = (error?.message || "").toString();
  return (
    name === "NotFoundError" ||
    /not found|missing file|no such file/i.test(message)
  );
}

function disconnectedResult(error) {
  return {
    state: FILE_SAFETY_STATES.DISCONNECTED,
    dirty: true,
    conflicted: false,
    disconnected: true,
    actions: [FILE_SAFETY_ACTIONS.RECONNECT, FILE_SAFETY_ACTIONS.SAVE_COPY],
    error,
  };
}

export function createFileSafetyService({
  provider,
  recoveryDrafts = null,
  isDirty = () => false,
} = {}) {
  if (!provider) {
    throw new Error("File safety service requires a browser file provider.");
  }

  function getLocalState(entry) {
    const binding = getBinding(entry);
    const dirty = Boolean(isDirty(entry));
    if (!binding) {
      return {
        state: dirty ? FILE_SAFETY_STATES.DIRTY : FILE_SAFETY_STATES.UNBOUND,
        binding: null,
        dirty,
        conflicted: false,
        disconnected: false,
        actions: [],
      };
    }
    if (!provider.isConnected()) {
      return {
        state: FILE_SAFETY_STATES.DISCONNECTED,
        binding,
        dirty,
        conflicted: false,
        disconnected: true,
        actions: [
          FILE_SAFETY_ACTIONS.RECONNECT,
          FILE_SAFETY_ACTIONS.SAVE_COPY,
        ],
      };
    }
    return {
      state: dirty ? FILE_SAFETY_STATES.DIRTY : FILE_SAFETY_STATES.CLEAN,
      binding,
      dirty,
      conflicted: false,
      disconnected: false,
      actions: [],
    };
  }

  async function checkExternalRevision(entry) {
    const local = getLocalState(entry);
    if (!local.binding || local.disconnected) return local;

    try {
      const path = getBindingPath(entry);
      const currentRevision = await provider.getRevision(path);
      const unchanged = sameRevisionSnapshot(
        local.binding.revision,
        currentRevision
      );
      if (local.dirty && !unchanged) {
        return {
          ...local,
          state: FILE_SAFETY_STATES.CONFLICTED,
          currentRevision,
          conflicted: true,
          actions: [
            FILE_SAFETY_ACTIONS.RELOAD_FROM_DISK,
            FILE_SAFETY_ACTIONS.SAVE_COPY,
            FILE_SAFETY_ACTIONS.OVERWRITE,
          ],
        };
      }
      return {
        ...local,
        currentRevision,
      };
    } catch (error) {
      return {
        ...local,
        ...disconnectedResult(error),
      };
    }
  }

  async function getSaveThroughBindingDecision(
    entry,
    { overwrite = false } = {}
  ) {
    const revisionState = await checkExternalRevision(entry);
    if (!revisionState.binding) {
      return {
        ...revisionState,
        allowed: false,
        reason: "unbound",
        actions: [FILE_SAFETY_ACTIONS.SAVE_COPY],
      };
    }
    if (revisionState.disconnected) {
      return {
        ...revisionState,
        allowed: false,
        reason: "disconnected",
      };
    }
    if (revisionState.conflicted && !overwrite) {
      return {
        ...revisionState,
        allowed: false,
        reason: "conflicted",
      };
    }
    return {
      ...revisionState,
      allowed: true,
      reason: overwrite && revisionState.conflicted ? "overwrite" : "unchanged",
    };
  }

  async function canAutosave(entry) {
    const binding = getBinding(entry);
    if (!binding || binding.autosaveEnabled === false || !isDirty(entry)) {
      return { allowed: false, reason: binding ? "not-dirty" : "unbound" };
    }
    const decision = await getSaveThroughBindingDecision(entry);
    if (!decision.allowed) {
      return { allowed: false, reason: decision.reason, state: decision };
    }
    return { allowed: true, reason: "eligible", state: decision };
  }

  async function checkSaveAsCollision(path, { overwrite = false } = {}) {
    const normalizedPath = assertProviderRelativePath(path);
    try {
      const revision = await provider.getRevision(normalizedPath);
      return {
        allowed: Boolean(overwrite),
        path: normalizedPath,
        collision: true,
        revision,
        reason: overwrite ? "overwrite-confirmed" : "collision",
      };
    } catch (error) {
      if (isMissingFileError(error)) {
        return {
          allowed: true,
          path: normalizedPath,
          collision: false,
          revision: null,
          reason: "available",
        };
      }
      return {
        allowed: false,
        path: normalizedPath,
        collision: false,
        reason: "disconnected",
        error,
      };
    }
  }

  async function reloadFromDisk(entry) {
    const path = getBindingPath(entry);
    if (!path) throw new Error("Reload requires a browser file binding.");
    const file = await provider.readFile(path);
    if (entry.fileBinding) {
      entry.fileBinding.revision = file.revision;
    }
    return {
      action: FILE_SAFETY_ACTIONS.RELOAD_FROM_DISK,
      path: file.path,
      text: file.text,
      revision: file.revision,
    };
  }

  async function writeWithRecovery({ entry, path, text, metadata = {} }) {
    await recoveryDrafts?.remember({ entry, path, text, metadata });
    const result = await provider.writeFile(path, text);
    await recoveryDrafts?.clearAfterSuccessfulWrite({
      entry,
      path,
      writtenPath: result.path,
    });
    return result;
  }

  async function overwrite(entry, text) {
    const path = getBindingPath(entry);
    if (!path) throw new Error("Overwrite requires a browser file binding.");
    const result = await writeWithRecovery({
      entry,
      path,
      text,
      metadata: { action: FILE_SAFETY_ACTIONS.OVERWRITE },
    });
    entry.fileBinding.revision = result.revision;
    return {
      action: FILE_SAFETY_ACTIONS.OVERWRITE,
      ...result,
    };
  }

  async function saveCopy({ entry, path, text }) {
    const normalizedPath = assertProviderRelativePath(path);
    const result = await writeWithRecovery({
      entry,
      path: normalizedPath,
      text,
      metadata: { action: FILE_SAFETY_ACTIONS.SAVE_COPY },
    });
    return {
      action: FILE_SAFETY_ACTIONS.SAVE_COPY,
      ...result,
    };
  }

  async function reconnect() {
    const workspace = await provider.reconnectWorkspace();
    return {
      action: FILE_SAFETY_ACTIONS.RECONNECT,
      workspace,
    };
  }

  async function getRecoveryDraft(entry) {
    const path = getBindingPath(entry);
    if (!path || !recoveryDrafts) return null;
    return recoveryDrafts.get({ entry, path });
  }

  async function restoreRecoveryDraft(entry) {
    const draft = await getRecoveryDraft(entry);
    return draft
      ? { action: FILE_SAFETY_ACTIONS.RESTORE_DRAFT, draft }
      : null;
  }

  async function discardRecoveryDraft(entry) {
    const path = getBindingPath(entry);
    if (!path || !recoveryDrafts) return false;
    await recoveryDrafts.clear({ entry, path });
    return true;
  }

  return {
    getLocalState,
    checkExternalRevision,
    getSaveThroughBindingDecision,
    canAutosave,
    checkSaveAsCollision,
    reloadFromDisk,
    overwrite,
    saveCopy,
    reconnect,
    getRecoveryDraft,
    restoreRecoveryDraft,
    discardRecoveryDraft,
  };
}
