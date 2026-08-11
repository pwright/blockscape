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

function normalizeRelativePath(path) {
  const raw = (path || "").toString().trim().replace(/\\/g, "/");
  if (!raw) return "";
  const parts = raw.split("/").filter(Boolean);
  if (!parts.length || parts.some((part) => part === "." || part === "..")) {
    return "";
  }
  const filename = parts[parts.length - 1];
  if (!filename.toLowerCase().endsWith(".bs")) return "";
  return parts.join("/");
}

function resolveSavePath(candidate) {
  const normalized = normalizeRelativePath(candidate);
  if (normalized) return normalized;
  return sanitizeFilename(candidate);
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
  refreshButton,
  loadButton,
  fileListEl,
  getActiveEntry,
  getPayloadText,
  getSuggestedFilename,
  onLoadFile,
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
  let files = [];
  let selectedPath = "";

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
      [connectButton, reconnectButton, disconnectButton, saveNowButton, refreshButton, loadButton].forEach((button) => {
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
    if (refreshButton) {
      refreshButton.disabled = !directoryHandle || permissionState !== "granted";
    }
    if (loadButton) {
      loadButton.disabled =
        !directoryHandle || permissionState !== "granted" || !selectedPath;
    }
    if (fileListEl) {
      fileListEl.disabled =
        !directoryHandle || permissionState !== "granted" || !files.length;
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
        await refreshFiles({ silent: true });
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
      await refreshFiles({ silent: true });
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
      await refreshFiles({ silent: true });
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
    files = [];
    selectedPath = "";
    renderFileList();
    await clearHandle();
    setStatus("Autosave folder disconnected.");
    syncUi();
  }

  async function getDirectoryForPath(path, { create = false } = {}) {
    const normalized = normalizeRelativePath(path);
    if (!normalized) throw new Error(`Invalid autosave path: ${path}`);
    const parts = normalized.split("/");
    const filename = parts.pop();
    let dir = directoryHandle;
    for (const part of parts) {
      dir = await dir.getDirectoryHandle(part, { create });
    }
    return { dir, filename, path: normalized };
  }

  async function writeTextFile(filename, text) {
    if (!directoryHandle) throw new Error("No autosave folder is connected.");
    if (permissionState !== "granted") {
      throw new Error("Autosave folder permission is required.");
    }
    const target = await getDirectoryForPath(filename, { create: true });
    await rememberDraft(target.path, text);
    const fileHandle = await target.dir.getFileHandle(target.filename, {
      create: true,
    });
    const writable = await fileHandle.createWritable();
    try {
      await writable.write(text);
      await writable.close();
      await clearDraft(target.path);
      upsertFile(target.path);
      lastSavedAt = new Date();
      setStatus(`Saved ${target.path} at ${lastSavedAt.toLocaleTimeString()}.`, "saved");
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
    const filename = resolveSavePath(getSuggestedFilename?.(entry));
    return { filename, text };
  }

  function renderFileList() {
    if (!fileListEl) return;
    fileListEl.innerHTML = "";
    if (!files.length) {
      const option = document.createElement("option");
      option.disabled = true;
      option.textContent = directoryHandle
        ? "No .bs files found"
        : "Open a folder to list .bs files";
      fileListEl.appendChild(option);
      selectedPath = "";
      syncUi();
      return;
    }
    files.forEach((file) => {
      const option = document.createElement("option");
      option.value = file.path;
      option.textContent = file.path;
      fileListEl.appendChild(option);
    });
    if (!files.some((file) => file.path === selectedPath)) {
      selectedPath = files[0]?.path || "";
    }
    fileListEl.value = selectedPath;
    syncUi();
  }

  function upsertFile(path) {
    const normalized = normalizeRelativePath(path);
    if (!normalized) return;
    if (!files.some((file) => file.path === normalized)) {
      files = [...files, { path: normalized }].sort((a, b) =>
        a.path.localeCompare(b.path)
      );
    }
    selectedPath = normalized;
    renderFileList();
  }

  async function collectBsFiles(handle, prefix = "", result = []) {
    for await (const [name, child] of handle.entries()) {
      const path = prefix ? `${prefix}/${name}` : name;
      if (child.kind === "file") {
        if (name.toLowerCase().endsWith(".bs")) {
          result.push({ path });
        }
        continue;
      }
      if (child.kind === "directory") {
        await collectBsFiles(child, path, result);
      }
    }
    return result;
  }

  async function refreshFiles({ silent = false } = {}) {
    if (!supported || !directoryHandle || permissionState !== "granted") {
      syncUi();
      return [];
    }
    if (!silent) setStatus("Scanning folder for .bs files...", "saving");
    if (refreshButton) refreshButton.disabled = true;
    try {
      files = (await collectBsFiles(directoryHandle)).sort((a, b) =>
        a.path.localeCompare(b.path)
      );
      if (!files.some((file) => file.path === selectedPath)) {
        selectedPath = files[0]?.path || "";
      }
      renderFileList();
      if (!silent) {
        const label = files.length === 1 ? "file" : "files";
        setStatus(`Found ${files.length} .bs ${label}.`, "saved");
      }
      return files;
    } catch (error) {
      console.warn("[Blockscape] browser autosave folder scan failed", error);
      setStatus(`Folder scan failed: ${error.message}`, "error");
      syncUi();
      return [];
    }
  }

  async function readTextFile(path) {
    if (!directoryHandle) throw new Error("No autosave folder is connected.");
    if (permissionState !== "granted") {
      throw new Error("Autosave folder permission is required.");
    }
    const target = await getDirectoryForPath(path);
    const fileHandle = await target.dir.getFileHandle(target.filename);
    const file = await fileHandle.getFile();
    return await file.text();
  }

  async function loadSelectedFile() {
    const path = selectedPath || fileListEl?.value || "";
    if (!path) return false;
    try {
      setStatus(`Loading ${path}...`, "saving");
      const text = await readTextFile(path);
      await onLoadFile?.({ path, text });
      selectedPath = path;
      renderFileList();
      setStatus(`Loaded ${path}.`, "saved");
      return true;
    } catch (error) {
      console.warn("[Blockscape] browser autosave file load failed", error);
      setStatus(`Load failed: ${error.message}`, "error");
      return false;
    }
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
  refreshButton?.addEventListener("click", () => refreshFiles());
  loadButton?.addEventListener("click", loadSelectedFile);
  fileListEl?.addEventListener("change", () => {
    selectedPath = fileListEl.value || "";
    syncUi();
  });
  fileListEl?.addEventListener("dblclick", loadSelectedFile);

  return {
    init,
    connect,
    reconnect,
    disconnect,
    schedule,
    flushNow,
    refreshFiles,
    loadSelectedFile,
    isConnected: () => !!directoryHandle && permissionState === "granted",
  };
}
