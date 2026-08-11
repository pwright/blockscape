const DB_NAME = "blockscape-browser-autosave";
const DB_VERSION = 1;
const HANDLE_STORE = "handles";
const DRAFT_STORE = "drafts";
const DIRECTORY_KEY = "workspace";
const DEFAULT_DEBOUNCE_MS = 700;

function openDb() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(HANDLE_STORE)) {
        db.createObjectStore(HANDLE_STORE);
      }
      if (!db.objectStoreNames.contains(DRAFT_STORE)) {
        db.createObjectStore(DRAFT_STORE, { keyPath: "filename" });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function idbGet(db, storeName, key) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, "readonly");
    const request = tx.objectStore(storeName).get(key);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function idbPut(db, storeName, keyOrValue, maybeValue) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, "readwrite");
    const store = tx.objectStore(storeName);
    const request =
      arguments.length === 4
        ? store.put(maybeValue, keyOrValue)
        : store.put(keyOrValue);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function idbDelete(db, storeName, key) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, "readwrite");
    const request = tx.objectStore(storeName).delete(key);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function isSupported() {
  return (
    typeof window !== "undefined" &&
    typeof window.showDirectoryPicker === "function" &&
    typeof indexedDB !== "undefined"
  );
}

function sanitizeFilename(name) {
  const base = (name || "blockscape")
    .toString()
    .trim()
    .replace(/\.[^.]+$/, "")
    .replace(/[^a-zA-Z0-9._-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
  return `${base || "blockscape"}.bs`;
}

async function verifyPermission(handle, readWrite) {
  const options = readWrite ? { mode: "readwrite" } : {};
  if ((await handle.queryPermission(options)) === "granted") return true;
  if ((await handle.requestPermission(options)) === "granted") return true;
  return false;
}

export function createBrowserAutosave({
  panel,
  statusEl,
  connectButton,
  reconnectButton,
  disconnectButton,
  saveNowButton,
  getActiveEntry,
  getPayloadText,
  getSuggestedFilename,
  showNotice = () => {},
  debounceMs = DEFAULT_DEBOUNCE_MS,
} = {}) {
  const supported = isSupported();
  let db = null;
  let directoryHandle = null;
  let saveTimer = null;
  let saveQueue = Promise.resolve();
  let permissionState = "unknown";
  let lastSavedAt = null;
  let pendingSave = null;

  function setStatus(message, state = "idle") {
    if (!statusEl) return;
    statusEl.textContent = message;
    statusEl.dataset.state = state;
  }

  function syncUi() {
    if (!panel) return;
    if (!supported) {
      panel.hidden = false;
      setStatus("Browser folder autosave needs Chromium with File System Access.", "error");
      [connectButton, reconnectButton, disconnectButton, saveNowButton].forEach((button) => {
        if (button) button.disabled = true;
      });
      return;
    }
    panel.hidden = false;
    if (connectButton) connectButton.hidden = !!directoryHandle;
    if (reconnectButton) {
      reconnectButton.hidden =
        !directoryHandle || permissionState === "granted";
    }
    if (disconnectButton) disconnectButton.hidden = !directoryHandle;
    if (saveNowButton) {
      saveNowButton.disabled = !directoryHandle || permissionState !== "granted";
    }
  }

  async function persistHandle(handle) {
    if (!db) return;
    await idbPut(db, HANDLE_STORE, DIRECTORY_KEY, handle);
  }

  async function clearHandle() {
    if (!db) return;
    await idbDelete(db, HANDLE_STORE, DIRECTORY_KEY);
  }

  async function rememberDraft(filename, text) {
    if (!db || !filename || typeof text !== "string") return;
    await idbPut(db, DRAFT_STORE, {
      filename,
      text,
      updatedAt: Date.now(),
    });
  }

  async function clearDraft(filename) {
    if (!db || !filename) return;
    await idbDelete(db, DRAFT_STORE, filename);
  }

  async function restoreHandle() {
    if (!db) return;
    try {
      directoryHandle = await idbGet(db, HANDLE_STORE, DIRECTORY_KEY);
      if (!directoryHandle) {
        setStatus("Choose a folder to autosave active maps as .bs files.");
        return;
      }
      permissionState = await directoryHandle.queryPermission({
        mode: "readwrite",
      });
      if (permissionState === "granted") {
        setStatus(`Autosave connected to "${directoryHandle.name}".`, "saved");
      } else {
        setStatus(`Reconnect "${directoryHandle.name}" to resume autosave.`, "warn");
      }
    } catch (error) {
      directoryHandle = null;
      permissionState = "unknown";
      console.warn("[Blockscape] browser autosave restore failed", error);
      setStatus("Could not restore the previous autosave folder.", "error");
    } finally {
      syncUi();
    }
  }

  async function connect() {
    if (!supported) return false;
    try {
      const handle = await window.showDirectoryPicker({
        id: "blockscape-text-workspace",
        mode: "readwrite",
        startIn: "documents",
      });
      directoryHandle = handle;
      permissionState = (await verifyPermission(handle, true))
        ? "granted"
        : "denied";
      if (permissionState !== "granted") {
        setStatus("Folder permission was not granted.", "error");
        syncUi();
        return false;
      }
      await persistHandle(handle);
      setStatus(`Autosave connected to "${handle.name}".`, "saved");
      showNotice(`Autosave connected to "${handle.name}".`, 2200);
      syncUi();
      await flushNow();
      return true;
    } catch (error) {
      if (error?.name !== "AbortError") {
        console.warn("[Blockscape] browser autosave connect failed", error);
        setStatus(`Autosave folder connection failed: ${error.message}`, "error");
      }
      syncUi();
      return false;
    }
  }

  async function reconnect() {
    if (!directoryHandle) return connect();
    try {
      permissionState = (await verifyPermission(directoryHandle, true))
        ? "granted"
        : "denied";
      if (permissionState !== "granted") {
        setStatus("Folder permission is still required.", "error");
        syncUi();
        return false;
      }
      setStatus(`Autosave connected to "${directoryHandle.name}".`, "saved");
      syncUi();
      await flushNow();
      return true;
    } catch (error) {
      console.warn("[Blockscape] browser autosave reconnect failed", error);
      setStatus(`Reconnect failed: ${error.message}`, "error");
      syncUi();
      return false;
    }
  }

  async function disconnect() {
    clearTimeout(saveTimer);
    pendingSave = null;
    directoryHandle = null;
    permissionState = "unknown";
    await clearHandle();
    setStatus("Autosave folder disconnected.");
    syncUi();
  }

  async function writeTextFile(filename, text) {
    if (!directoryHandle) throw new Error("No autosave folder is connected.");
    if (permissionState !== "granted") {
      throw new Error("Autosave folder permission is required.");
    }
    await rememberDraft(filename, text);
    const fileHandle = await directoryHandle.getFileHandle(filename, {
      create: true,
    });
    const writable = await fileHandle.createWritable();
    try {
      await writable.write(text);
      await writable.close();
      await clearDraft(filename);
      lastSavedAt = new Date();
      setStatus(`Saved ${filename} at ${lastSavedAt.toLocaleTimeString()}.`, "saved");
    } catch (error) {
      try {
        await writable.abort();
      } catch {
        // Ignore abort failures; the original write error is more useful.
      }
      throw error;
    }
  }

  function resolveCurrentSave() {
    const entry = getActiveEntry?.();
    if (!entry) return null;
    const text = getPayloadText?.(entry);
    if (!text || !text.trim()) return null;
    const filename = sanitizeFilename(getSuggestedFilename?.(entry));
    return { filename, text };
  }

  function schedule() {
    if (!supported || !directoryHandle || permissionState !== "granted") return;
    const next = resolveCurrentSave();
    if (!next) return;
    pendingSave = next;
    clearTimeout(saveTimer);
    setStatus(`Saving ${next.filename}...`, "saving");
    saveTimer = setTimeout(() => {
      const target = pendingSave;
      pendingSave = null;
      saveQueue = saveQueue
        .then(() => writeTextFile(target.filename, target.text))
        .catch((error) => {
          console.warn("[Blockscape] browser autosave failed", error);
          setStatus(`Autosave failed: ${error.message}`, "error");
        });
    }, debounceMs);
  }

  async function flushNow() {
    if (!supported || !directoryHandle) return false;
    if (permissionState !== "granted") {
      setStatus("Reconnect the folder before saving.", "warn");
      syncUi();
      return false;
    }
    const next = resolveCurrentSave();
    if (!next) return false;
    clearTimeout(saveTimer);
    pendingSave = null;
    setStatus(`Saving ${next.filename}...`, "saving");
    saveQueue = saveQueue
      .then(() => writeTextFile(next.filename, next.text))
      .catch((error) => {
        console.warn("[Blockscape] browser autosave failed", error);
        setStatus(`Autosave failed: ${error.message}`, "error");
        return false;
      });
    const result = await saveQueue;
    return result !== false;
  }

  async function init() {
    syncUi();
    if (!supported) return false;
    try {
      db = await openDb();
      await restoreHandle();
      return true;
    } catch (error) {
      console.warn("[Blockscape] browser autosave init failed", error);
      setStatus("Browser autosave could not start.", "error");
      syncUi();
      return false;
    }
  }

  connectButton?.addEventListener("click", connect);
  reconnectButton?.addEventListener("click", reconnect);
  disconnectButton?.addEventListener("click", disconnect);
  saveNowButton?.addEventListener("click", flushNow);

  return {
    init,
    connect,
    reconnect,
    disconnect,
    schedule,
    flushNow,
    isConnected: () => !!directoryHandle && permissionState === "granted",
  };
}
