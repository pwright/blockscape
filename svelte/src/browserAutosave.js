import {
  createBrowserFileProvider,
  isBrowserFileProviderSupported,
} from "./localFiles/browserFileProvider.js";
import { createFileAutosaveController } from "./localFiles/fileAutosaveController.js";
import { createFileSafetyService } from "./localFiles/fileSafetyService.js";
import {
  createBrowserFileBinding,
  ensureBrowserFileBinding,
} from "./localFiles/fileBinding.js";
import {
  createIndexedDbDraftAdapter,
  createRecoveryDraftStore,
  RECOVERY_DRAFT_STORE,
} from "./localFiles/recoveryDraftStore.js";
import { normalizeProviderRelativePath } from "./localFiles/pathPolicy.js";

const DB_NAME = "blockscape-browser-autosave";
const DB_VERSION = 1;
const HANDLE_STORE = "handles";
const RECENT_KEY = "recent-folders";
const MAX_RECENT_FOLDERS = 5;
const DEFAULT_DEBOUNCE_MS = 700;

function openDb() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(HANDLE_STORE)) {
        db.createObjectStore(HANDLE_STORE);
      }
      if (!db.objectStoreNames.contains(RECOVERY_DRAFT_STORE)) {
        db.createObjectStore(RECOVERY_DRAFT_STORE, { keyPath: "filename" });
      }
    };
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

function isSupported() {
  return isBrowserFileProviderSupported();
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
  return normalizeProviderRelativePath(path);
}

function resolveSavePath(candidate) {
  const normalized = normalizeRelativePath(candidate);
  if (normalized) return normalized;
  return sanitizeFilename(candidate);
}

export function createBrowserAutosave({
  panel,
  statusEl,
  connectButton,
  reconnectButton,
  disconnectButton,
  saveNowButton,
  recentContainer,
  recentListEl,
  activeBindingEl,
  activeStateEl,
  refreshButton: initialRefreshButton,
  loadButton: initialLoadButton,
  deleteButton: initialDeleteButton,
  fileTableEl: initialFileTableEl,
  fileTableBodyEl: initialFileTableBodyEl,
  getActiveEntry,
  getPayloadText,
  getSuggestedFilename,
  getSaveAsFilename,
  onLoadFile,
  onSaveAsPath,
  onConnectionChange,
  showNotice = () => {},
  debounceMs = DEFAULT_DEBOUNCE_MS,
} = {}) {
  const supported = isSupported();
  const provider = createBrowserFileProvider();
  let db = null;
  let recoveryDrafts = null;
  let autosaveController = null;
  let lastSavedAt = null;
  let files = [];
  let selectedPath = "";
  let refreshButton = initialRefreshButton || null;
  let loadButton = initialLoadButton || null;
  let deleteButton = initialDeleteButton || null;
  let fileTableEl = initialFileTableEl || null;
  let fileTableBodyEl = initialFileTableBodyEl || null;
  let sortKey = "path";
  let sortDirection = "asc";
  let recentFolders = [];

  function setStatus(message, state = "idle") {
    if (!statusEl) return;
    statusEl.textContent = message;
    statusEl.dataset.state = state;
  }

  function notifyConnectionChange() {
    if (typeof onConnectionChange === "function") {
      onConnectionChange(provider.isConnected());
    }
  }

  function updateActiveBindingUi() {
    const entry = getActiveEntry?.();
    const path =
      entry?.fileBinding?.target?.path || entry?.browserAutosavePath || "";
    if (activeBindingEl) {
      activeBindingEl.textContent = path || "Not file-backed";
      activeBindingEl.title = path || "";
    }
    if (activeStateEl) {
      let state = "Unbound";
      if (path && provider.isConnected()) state = "File-backed";
      if (path && !provider.isConnected()) state = "Disconnected";
      activeStateEl.textContent = state;
      activeStateEl.dataset.state = state.toLowerCase().replace(/\s+/g, "-");
    }
  }

  function syncUi() {
    if (!panel) return;
    if (!supported) {
      panel.hidden = false;
      setStatus("Local files need Chromium with File System Access.", "error");
      [connectButton, reconnectButton, disconnectButton, saveNowButton, refreshButton, loadButton].forEach((button) => {
        if (button) button.disabled = true;
      });
      return;
    }
    panel.hidden = false;
    const workspace = provider.getWorkspace();
    if (connectButton) connectButton.hidden = !!workspace.handle;
    if (reconnectButton) {
      reconnectButton.hidden =
        !workspace.handle || workspace.permissionState === "granted";
    }
    if (disconnectButton) disconnectButton.hidden = !workspace.handle;
    if (saveNowButton) {
      saveNowButton.disabled =
        !workspace.handle ||
        workspace.permissionState !== "granted" ||
        !getActiveEntry?.();
    }
    if (refreshButton) {
      refreshButton.disabled =
        !workspace.handle || workspace.permissionState !== "granted";
    }
    if (loadButton) {
      loadButton.disabled =
        !workspace.handle ||
        workspace.permissionState !== "granted" ||
        !selectedPath;
    }
    if (deleteButton) {
      deleteButton.disabled =
        !workspace.handle ||
        workspace.permissionState !== "granted" ||
        !selectedPath;
    }
    if (fileTableEl) {
      fileTableEl.classList.toggle(
        "is-disabled",
        !workspace.handle ||
          workspace.permissionState !== "granted" ||
          !files.length
      );
    }
    if (recentContainer) {
      recentContainer.hidden = !recentFolders.length;
    }
    updateActiveBindingUi();
    notifyConnectionChange();
  }

  function makeRecentId() {
    return `${Date.now().toString(36)}-${Math.random()
      .toString(36)
      .slice(2, 8)}`;
  }

  function sameHandle(a, b) {
    return !!a && !!b && typeof a.isSameEntry === "function"
      ? a.isSameEntry(b).catch(() => false)
      : Promise.resolve(false);
  }

  async function loadRecentFolders() {
    if (!db) return [];
    try {
      const raw = await new Promise((resolve, reject) => {
        const tx = db.transaction(HANDLE_STORE, "readonly");
        const request = tx.objectStore(HANDLE_STORE).get(RECENT_KEY);
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
      });
      recentFolders = Array.isArray(raw) ? raw.slice(0, MAX_RECENT_FOLDERS) : [];
    } catch (error) {
      console.warn("[Blockscape] failed to load recent folders", error);
      recentFolders = [];
    }
    renderRecentFolders();
    return recentFolders;
  }

  async function persistRecentFolders() {
    if (!db) return;
    await idbPut(db, HANDLE_STORE, RECENT_KEY, recentFolders);
  }

  async function rememberRecentFolder(handle) {
    if (!handle) return;
    let matchIndex = -1;
    for (let i = 0; i < recentFolders.length; i += 1) {
      if (await sameHandle(recentFolders[i].handle, handle)) {
        matchIndex = i;
        break;
      }
    }
    const existing = matchIndex >= 0 ? recentFolders[matchIndex] : null;
    const next = {
      id: existing?.id || makeRecentId(),
      name: handle.name || existing?.name || "Folder",
      handle,
      lastUsedAt: Date.now(),
    };
    recentFolders = [
      next,
      ...recentFolders.filter((_, idx) => idx !== matchIndex),
    ].slice(0, MAX_RECENT_FOLDERS);
    await persistRecentFolders();
    renderRecentFolders();
  }

  function formatRecentTime(value) {
    const time = Number(value);
    if (!Number.isFinite(time) || time <= 0) return "";
    return new Date(time).toLocaleString();
  }

  function renderRecentFolders() {
    if (!recentListEl) {
      syncUi();
      return;
    }
    recentListEl.innerHTML = "";
    recentFolders.forEach((folder) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "browser-autosave__recent-item";
      button.dataset.recentFolderId = folder.id;
      const name = document.createElement("span");
      name.className = "browser-autosave__recent-name";
      name.textContent = folder.name || "Folder";
      const meta = document.createElement("span");
      meta.className = "browser-autosave__recent-meta";
      meta.textContent = formatRecentTime(folder.lastUsedAt);
      button.append(name, meta);
      recentListEl.appendChild(button);
    });
    syncUi();
  }

  async function connect() {
    if (!supported) return false;
    try {
      const workspace = await provider.connectWorkspace();
      if (workspace.permissionState !== "granted") {
        setStatus("Workspace permission was not granted.", "error");
        syncUi();
        return false;
      }
      await rememberRecentFolder(workspace.handle);
      setStatus(`Local files connected to "${workspace.name}".`, "saved");
      showNotice(`Local files connected to "${workspace.name}".`, 2200);
      await refreshFiles({ silent: true });
      syncUi();
      return true;
    } catch (error) {
      if (error?.name !== "AbortError") {
        console.warn("[Blockscape] browser autosave connect failed", error);
        setStatus(`Workspace connection failed: ${error.message}`, "error");
      }
      syncUi();
      return false;
    }
  }

  async function reconnect() {
    if (!provider.getWorkspaceHandle()) return connect();
    try {
      const workspace = await provider.reconnectWorkspace();
      if (workspace.permissionState !== "granted") {
        setStatus("Folder permission is still required.", "error");
        syncUi();
        return false;
      }
      setStatus(`Local files connected to "${workspace.name}".`, "saved");
      await refreshFiles({ silent: true });
      syncUi();
      return true;
    } catch (error) {
      console.warn("[Blockscape] browser autosave reconnect failed", error);
      setStatus(`Reconnect failed: ${error.message}`, "error");
      syncUi();
      return false;
    }
  }

  async function disconnect() {
    autosaveController?.dispose();
    provider.disconnectWorkspace();
    files = [];
    selectedPath = "";
    renderFiles();
    setStatus("Local files disconnected.");
    syncUi();
  }

  async function writeTextFile(filename, text, entry) {
    const normalized = normalizeRelativePath(filename);
    if (!normalized) throw new Error(`Invalid autosave path: ${filename}`);
    await recoveryDrafts?.remember({
      entry,
      path: normalized,
      text,
      metadata: {
        displayPath: normalized,
      },
    });
    const result = await provider.writeFile(normalized, text);
    await recoveryDrafts?.clearAfterSuccessfulWrite({
      entry,
      path: normalized,
      writtenPath: result.path,
    });
    if (entry) {
      entry.fileBinding = createBrowserFileBinding(result.path, {
        revision: result.revision,
      });
    }
    markSaved(result.path, text, result.revision);
    return result;
  }

  function getFileRevision(path) {
    return files.find((file) => file.path === path)?.revision || null;
  }

  function getActiveEntryForAutosave() {
    const entry = getActiveEntry?.();
    if (!entry) return null;
    if (entry.browserAutosavePath && !entry.fileBinding) {
      ensureBrowserFileBinding(entry, {
        revision: getFileRevision(entry.browserAutosavePath),
      });
    }
    return entry;
  }

  function markSaved(path, text, revision) {
    upsertFile(path, {
      size:
        revision?.size ??
        (typeof Blob === "function" ? new Blob([text]).size : text.length),
      lastModified: revision?.lastModified ?? Date.now(),
      revision,
    });
    lastSavedAt = new Date();
    setStatus(`Saved ${path} at ${lastSavedAt.toLocaleTimeString()}.`, "saved");
  }

  function resolveCurrentSave() {
    const entry = getActiveEntry?.();
    if (!entry) return null;
    const text = getPayloadText?.(entry);
    if (!text || !text.trim()) return null;
    const filename = normalizeRelativePath(getSuggestedFilename?.(entry));
    if (!filename) return null;
    return { filename, text, entry };
  }

  function resolveSaveAs() {
    const entry = getActiveEntry?.();
    if (!entry) return null;
    const text = getPayloadText?.(entry);
    if (!text || !text.trim()) return null;
    const defaultName =
      normalizeRelativePath(getSuggestedFilename?.(entry)) ||
      resolveSavePath(getSaveAsFilename?.(entry));
    if (typeof window === "undefined" || typeof window.prompt !== "function") {
      return { filename: defaultName, text, entry };
    }
    const response = window.prompt(
      "Save active map as .bs file in the connected workspace:",
      defaultName
    );
    if (response == null) return null;
    const filename = resolveSavePath(response);
    if (!filename) return null;
    return { filename, text, entry };
  }

  function getFileName(path) {
    return (path || "").split("/").filter(Boolean).pop() || path || "";
  }

  function formatBytes(value) {
    const bytes = Number(value);
    if (!Number.isFinite(bytes) || bytes < 0) return "";
    if (bytes < 1024) return `${bytes} B`;
    const units = ["KB", "MB", "GB"];
    let next = bytes / 1024;
    for (let i = 0; i < units.length; i += 1) {
      if (next < 1024 || i === units.length - 1) {
        return `${next.toFixed(next < 10 ? 1 : 0)} ${units[i]}`;
      }
      next /= 1024;
    }
    return `${bytes} B`;
  }

  function formatModified(value) {
    const time = Number(value);
    if (!Number.isFinite(time) || time <= 0) return "";
    return new Date(time).toLocaleString();
  }

  function sortedFiles() {
    const direction = sortDirection === "desc" ? -1 : 1;
    return [...files].sort((a, b) => {
      let left;
      let right;
      if (sortKey === "name") {
        left = getFileName(a.path).toLowerCase();
        right = getFileName(b.path).toLowerCase();
      } else if (sortKey === "size") {
        left = Number(a.size) || 0;
        right = Number(b.size) || 0;
      } else if (sortKey === "modified") {
        left = Number(a.lastModified) || 0;
        right = Number(b.lastModified) || 0;
      } else {
        left = (a.path || "").toLowerCase();
        right = (b.path || "").toLowerCase();
      }
      if (left < right) return -1 * direction;
      if (left > right) return 1 * direction;
      return (a.path || "").localeCompare(b.path || "");
    });
  }

  function syncSortHeaders() {
    if (!fileTableEl) return;
    fileTableEl.querySelectorAll("[data-browser-file-sort]").forEach((button) => {
      const active = button.dataset.browserFileSort === sortKey;
      const header = button.closest("th");
      if (header) {
        header.setAttribute(
          "aria-sort",
          active
            ? sortDirection === "desc"
              ? "descending"
              : "ascending"
            : "none"
        );
      }
      button.dataset.sortDirection = active ? sortDirection : "none";
    });
  }

  function renderFileTable() {
    if (!fileTableBodyEl) return;
    fileTableBodyEl.innerHTML = "";
    if (!files.length) {
      const row = document.createElement("tr");
      const cell = document.createElement("td");
      cell.colSpan = 4;
      cell.className = "browser-autosave-table__empty";
      cell.textContent = provider.getWorkspaceHandle()
        ? "No .bs files found"
        : "Open a workspace to list .bs files";
      row.appendChild(cell);
      fileTableBodyEl.appendChild(row);
      selectedPath = "";
      syncSortHeaders();
      syncUi();
      return;
    }

    sortedFiles().forEach((file) => {
      const row = document.createElement("tr");
      row.className =
        "browser-autosave-table__row" +
        (file.path === selectedPath ? " is-selected" : "");
      row.dataset.path = file.path;
      row.tabIndex = 0;

      const nameCell = document.createElement("td");
      nameCell.textContent = getFileName(file.path);
      const pathCell = document.createElement("td");
      pathCell.textContent = file.path;
      const sizeCell = document.createElement("td");
      sizeCell.className = "browser-autosave-table__numeric";
      sizeCell.textContent = formatBytes(file.size);
      const modifiedCell = document.createElement("td");
      modifiedCell.textContent = formatModified(file.lastModified);
      row.append(nameCell, pathCell, sizeCell, modifiedCell);
      fileTableBodyEl.appendChild(row);
    });

    if (!files.some((file) => file.path === selectedPath)) {
      selectedPath = sortedFiles()[0]?.path || "";
      renderFileTable();
      return;
    }
    syncSortHeaders();
    syncUi();
  }

  function renderFiles() {
    renderFileTable();
  }

  function upsertFile(path, metadata = {}) {
    const normalized = normalizeRelativePath(path);
    if (!normalized) return;
    const existing = files.find((file) => file.path === normalized);
    if (existing) {
      Object.assign(existing, metadata);
    } else {
      files = [...files, { path: normalized, ...metadata }].sort((a, b) =>
        a.path.localeCompare(b.path)
      );
    }
    selectedPath = normalized;
    renderFiles();
  }

  async function refreshFiles({ silent = false } = {}) {
    if (!supported || !provider.isConnected()) {
      syncUi();
      return [];
    }
    if (!silent) setStatus("Scanning workspace for .bs files...", "saving");
    if (refreshButton) refreshButton.disabled = true;
    try {
      files = await provider.listFiles();
      if (!files.some((file) => file.path === selectedPath)) {
        selectedPath = files[0]?.path || "";
      }
      renderFiles();
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

  async function loadSelectedFile() {
    const path = selectedPath || "";
    if (!path) return false;
    try {
      setStatus(`Loading ${path}...`, "saving");
      const file = await provider.readFile(path);
      await onLoadFile?.({
        path,
        text: file.text,
        revision: file.revision,
      });
      selectedPath = path;
      renderFiles();
      setStatus(`Loaded ${path}.`, "saved");
      updateActiveBindingUi();
      return true;
    } catch (error) {
      console.warn("[Blockscape] browser autosave file load failed", error);
      setStatus(`Load failed: ${error.message}`, "error");
      return false;
    }
  }

  async function deleteSelectedFile() {
    const path = selectedPath || "";
    if (!path || !provider.isConnected()) return false;
    const confirmed =
      typeof window === "undefined" ||
      typeof window.confirm !== "function" ||
      window.confirm(`Delete ${path} from the connected local workspace?`);
    if (!confirmed) return false;
    try {
      setStatus(`Deleting ${path}...`, "saving");
      await provider.deleteFile(path);
      files = files.filter((file) => file.path !== path);
      selectedPath = files[0]?.path || "";
      renderFiles();
      setStatus(`Deleted ${path}.`, "saved");
      return true;
    } catch (error) {
      console.warn("[Blockscape] local file delete failed", error);
      setStatus(`Delete failed: ${error.message}`, "error");
      syncUi();
      return false;
    }
  }

  function schedule() {
    if (!supported || !provider.isConnected() || !autosaveController) return;
    const next = resolveCurrentSave();
    if (!next) return;
    if (next.entry.browserAutosavePath && !next.entry.fileBinding) {
      ensureBrowserFileBinding(next.entry, {
        revision: getFileRevision(next.entry.browserAutosavePath),
      });
    }
    setStatus(`Saving ${next.filename}...`, "saving");
    autosaveController.schedule();
  }

  async function flushNow() {
    if (!supported || !provider.getWorkspaceHandle() || !autosaveController) return false;
    if (!provider.isConnected()) {
      setStatus("Reconnect the workspace before saving.", "warn");
      syncUi();
      return false;
    }
    const next = resolveCurrentSave();
    if (!next) return false;
    setStatus(`Saving ${next.filename}...`, "saving");
    const result = await autosaveController.flushNow();
    return Boolean(result?.saved);
  }

  async function saveAs() {
    if (!supported || !provider.getWorkspaceHandle()) return false;
    if (!provider.isConnected()) {
      setStatus("Reconnect the workspace before saving.", "warn");
      syncUi();
      return false;
    }
    const next = resolveSaveAs();
    if (!next) return false;
    autosaveController?.dispose();
    setStatus(`Saving ${next.filename}...`, "saving");
    try {
      const result = await writeTextFile(next.filename, next.text, next.entry);
      onSaveAsPath?.(next.entry, next.filename, result.revision);
      return true;
    } catch (error) {
      console.warn("[Blockscape] browser save-as failed", error);
      setStatus(`Save failed: ${error.message}`, "error");
      return false;
    }
  }

  async function saveCurrent() {
    if (!supported) return false;
    if (!provider.getWorkspaceHandle()) {
      setStatus("Open a workspace before saving a local file.", "warn");
      syncUi();
      return false;
    }
    const current = resolveCurrentSave();
    if (current) return flushNow();
    return saveAs();
  }

  async function connectRecentFolder(id) {
    const record = recentFolders.find((folder) => folder.id === id);
    if (!record?.handle) return false;
    try {
      const workspace = await provider.reconnectWorkspace(record.handle);
      if (workspace.permissionState !== "granted") {
        setStatus(`Permission required for "${record.name}".`, "error");
        syncUi();
        return false;
      }
      await rememberRecentFolder(workspace.handle);
      setStatus(`Autosave connected to "${workspace.name}".`, "saved");
      await refreshFiles({ silent: true });
      syncUi();
      return true;
    } catch (error) {
      console.warn("[Blockscape] recent folder reconnect failed", error);
      setStatus(`Could not open "${record.name}": ${error.message}`, "error");
      syncUi();
      return false;
    }
  }

  async function init() {
    syncUi();
    if (!supported) return false;
    try {
      db = await openDb();
      recoveryDrafts = createRecoveryDraftStore({
        adapter: createIndexedDbDraftAdapter(db),
      });
      const fileSafety = createFileSafetyService({
        provider,
        recoveryDrafts,
        isDirty: () => true,
      });
      autosaveController = createFileAutosaveController({
        fileSafety,
        getActiveEntry: getActiveEntryForAutosave,
        getPayloadText,
        debounceMs,
        onStateChange: ({ state }) => {
          if (state === "saving") setStatus("Saving file...", "saving");
        },
        onSaved: ({ entry, text, result }) => {
          if (entry?.fileBinding && result?.revision) {
            entry.fileBinding.revision = result.revision;
          }
          markSaved(result.path, text, result.revision);
        },
        onSkipped: ({ reason }) => {
          if (reason === "conflicted" || reason === "disconnected") {
            setStatus(`Autosave paused: ${reason}.`, "warn");
          }
        },
        onError: ({ error }) => {
          console.warn("[Blockscape] browser autosave failed", error);
          setStatus(`Autosave failed: ${error.message}`, "error");
        },
      });
      await loadRecentFolders();
      setStatus("Open a workspace to browse .bs files or save the active map.");
      syncUi();
      return true;
    } catch (error) {
      console.warn("[Blockscape] browser autosave init failed", error);
      setStatus("Local files could not start.", "error");
      syncUi();
      return false;
    }
  }

  connectButton?.addEventListener("click", connect);
  reconnectButton?.addEventListener("click", reconnect);
  disconnectButton?.addEventListener("click", disconnect);
  saveNowButton?.addEventListener("click", saveAs);
  refreshButton?.addEventListener("click", () => refreshFiles());
  loadButton?.addEventListener("click", loadSelectedFile);
  deleteButton?.addEventListener("click", deleteSelectedFile);
  recentListEl?.addEventListener("click", (event) => {
    const button = event.target?.closest?.("[data-recent-folder-id]");
    if (!button || !recentListEl.contains(button)) return;
    connectRecentFolder(button.dataset.recentFolderId);
  });
  fileTableEl?.addEventListener("click", (event) => {
    const sortButton = event.target?.closest?.("[data-browser-file-sort]");
    if (sortButton && fileTableEl.contains(sortButton)) {
      const nextKey = sortButton.dataset.browserFileSort;
      if (nextKey === sortKey) {
        sortDirection = sortDirection === "asc" ? "desc" : "asc";
      } else {
        sortKey = nextKey;
        sortDirection = nextKey === "modified" ? "desc" : "asc";
      }
      renderFileTable();
      return;
    }
    const row = event.target?.closest?.("[data-path]");
    if (!row || !fileTableEl.contains(row)) return;
    selectedPath = row.dataset.path || "";
    renderFileTable();
  });
  fileTableEl?.addEventListener("dblclick", (event) => {
    const row = event.target?.closest?.("[data-path]");
    if (!row || !fileTableEl.contains(row)) return;
    selectedPath = row.dataset.path || "";
    loadSelectedFile();
  });
  fileTableEl?.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    const row = event.target?.closest?.("[data-path]");
    if (!row || !fileTableEl.contains(row)) return;
    selectedPath = row.dataset.path || "";
    loadSelectedFile();
  });

  function mountFileBrowser({
    fileTableEl: nextFileTableEl,
    fileTableBodyEl: nextFileTableBodyEl,
    refreshButton: nextRefreshButton,
    loadButton: nextLoadButton,
    deleteButton: nextDeleteButton,
  } = {}) {
    fileTableEl = nextFileTableEl || null;
    fileTableBodyEl = nextFileTableBodyEl || null;
    refreshButton = nextRefreshButton || null;
    loadButton = nextLoadButton || null;
    deleteButton = nextDeleteButton || null;
    refreshButton?.addEventListener("click", () => refreshFiles());
    loadButton?.addEventListener("click", loadSelectedFile);
    deleteButton?.addEventListener("click", deleteSelectedFile);
    fileTableEl?.addEventListener("click", (event) => {
      const sortButton = event.target?.closest?.("[data-browser-file-sort]");
      if (sortButton && fileTableEl.contains(sortButton)) {
        const nextKey = sortButton.dataset.browserFileSort;
        if (nextKey === sortKey) {
          sortDirection = sortDirection === "asc" ? "desc" : "asc";
        } else {
          sortKey = nextKey;
          sortDirection = nextKey === "modified" ? "desc" : "asc";
        }
        renderFileTable();
        return;
      }
      const row = event.target?.closest?.("[data-path]");
      if (!row || !fileTableEl.contains(row)) return;
      selectedPath = row.dataset.path || "";
      renderFileTable();
    });
    fileTableEl?.addEventListener("dblclick", (event) => {
      const row = event.target?.closest?.("[data-path]");
      if (!row || !fileTableEl.contains(row)) return;
      selectedPath = row.dataset.path || "";
      loadSelectedFile();
    });
    fileTableEl?.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;
      const row = event.target?.closest?.("[data-path]");
      if (!row || !fileTableEl.contains(row)) return;
      selectedPath = row.dataset.path || "";
      loadSelectedFile();
    });
    renderFiles();
    syncUi();
  }

  return {
    init,
    connect,
    reconnect,
    disconnect,
    refreshUi: syncUi,
    schedule,
    flushNow,
    saveCurrent,
    saveAs,
    connectRecentFolder,
    refreshFiles,
    loadSelectedFile,
    mountFileBrowser,
    isConnected: provider.isConnected,
  };
}
