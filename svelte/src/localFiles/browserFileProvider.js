import { normalizeRevisionSnapshot } from "./fileBinding.js";
import {
  assertProviderRelativePath,
  normalizeProviderRelativePath,
} from "./pathPolicy.js";

const DEFAULT_PICKER_OPTIONS = {
  id: "blockscape-text-workspace",
  mode: "readwrite",
  startIn: "documents",
};

export function isBrowserFileProviderSupported({ win = globalThis.window } = {}) {
  return (
    typeof win !== "undefined" &&
    typeof win.showDirectoryPicker === "function" &&
    typeof globalThis.indexedDB !== "undefined"
  );
}

export async function verifyHandlePermission(handle, { readWrite = true } = {}) {
  if (!handle) return false;
  const options = readWrite ? { mode: "readwrite" } : {};
  if (typeof handle.queryPermission === "function") {
    if ((await handle.queryPermission(options)) === "granted") return true;
  }
  if (typeof handle.requestPermission === "function") {
    return (await handle.requestPermission(options)) === "granted";
  }
  return true;
}

export function createBrowserFileProvider({
  win = globalThis.window,
  directoryHandle = null,
  pickerOptions = DEFAULT_PICKER_OPTIONS,
  getNow = () => Date.now(),
} = {}) {
  let workspaceHandle = directoryHandle;
  let permissionState = workspaceHandle ? "unknown" : "unknown";

  function getWorkspaceHandle() {
    return workspaceHandle;
  }

  function getPermissionState() {
    return permissionState;
  }

  function isConnected() {
    return !!workspaceHandle && permissionState === "granted";
  }

  async function connectWorkspace() {
    if (!win || typeof win.showDirectoryPicker !== "function") {
      throw new Error("Browser File System Access is not available.");
    }
    const handle = await win.showDirectoryPicker(pickerOptions);
    workspaceHandle = handle;
    permissionState = (await verifyHandlePermission(handle, { readWrite: true }))
      ? "granted"
      : "denied";
    return getWorkspace();
  }

  async function reconnectWorkspace(handle = workspaceHandle) {
    if (!handle) {
      return connectWorkspace();
    }
    workspaceHandle = handle;
    permissionState = (await verifyHandlePermission(handle, { readWrite: true }))
      ? "granted"
      : "denied";
    return getWorkspace();
  }

  function disconnectWorkspace() {
    workspaceHandle = null;
    permissionState = "unknown";
  }

  function getWorkspace() {
    return {
      handle: workspaceHandle,
      name: workspaceHandle?.name || "",
      permissionState,
      connected: isConnected(),
    };
  }

  function assertConnected() {
    if (!workspaceHandle) {
      throw new Error("No browser file workspace is connected.");
    }
    if (permissionState !== "granted") {
      throw new Error("Browser file workspace permission is required.");
    }
  }

  async function resolveTarget(path, { create = false } = {}) {
    assertConnected();
    const normalized = assertProviderRelativePath(path);
    const parts = normalized.split("/");
    const filename = parts.pop();
    let dir = workspaceHandle;
    for (const part of parts) {
      dir = await dir.getDirectoryHandle(part, { create });
    }
    return { dir, filename, path: normalized };
  }

  async function getRevision(path) {
    const target = await resolveTarget(path);
    const fileHandle = await target.dir.getFileHandle(target.filename);
    const file = await fileHandle.getFile();
    return normalizeRevisionSnapshot({
      lastModified: file.lastModified,
      size: file.size,
    });
  }

  async function readFile(path) {
    const target = await resolveTarget(path);
    const fileHandle = await target.dir.getFileHandle(target.filename);
    const file = await fileHandle.getFile();
    return {
      path: target.path,
      text: await file.text(),
      revision: normalizeRevisionSnapshot({
        lastModified: file.lastModified,
        size: file.size,
      }),
    };
  }

  async function writeFile(path, text) {
    const target = await resolveTarget(path, { create: true });
    const fileHandle = await target.dir.getFileHandle(target.filename, {
      create: true,
    });
    const writable = await fileHandle.createWritable();
    try {
      await writable.write(text);
      await writable.close();
    } catch (error) {
      if (typeof writable.abort === "function") {
        try {
          await writable.abort();
        } catch {
          // Keep the original write error.
        }
      }
      throw error;
    }

    let revision = null;
    try {
      revision = await getRevision(target.path);
    } catch {
      revision = normalizeRevisionSnapshot({
        lastModified: getNow(),
        size: typeof Blob === "function" ? new Blob([text]).size : text.length,
      });
    }
    return { path: target.path, revision };
  }

  async function deleteFile(path) {
    const target = await resolveTarget(path);
    if (typeof target.dir.removeEntry !== "function") {
      throw new Error("File deletion is not supported by this browser.");
    }
    await target.dir.removeEntry(target.filename);
    return { path: target.path };
  }

  async function collectBsFiles(handle, prefix = "", result = []) {
    for await (const [name, child] of handle.entries()) {
      const path = prefix ? `${prefix}/${name}` : name;
      if (child.kind === "file") {
        const normalized = normalizeProviderRelativePath(path);
        if (normalized) {
          try {
            const file = await child.getFile();
            result.push({
              path: normalized,
              size: file.size,
              lastModified: file.lastModified,
              revision: normalizeRevisionSnapshot({
                lastModified: file.lastModified,
                size: file.size,
              }),
            });
          } catch {
            result.push({ path: normalized });
          }
        }
        continue;
      }
      if (child.kind === "directory") {
        await collectBsFiles(child, path, result);
      }
    }
    return result;
  }

  async function listFiles() {
    assertConnected();
    return (await collectBsFiles(workspaceHandle)).sort((a, b) =>
      a.path.localeCompare(b.path)
    );
  }

  return {
    connectWorkspace,
    reconnectWorkspace,
    disconnectWorkspace,
    listFiles,
    readFile,
    writeFile,
    deleteFile,
    getRevision,
    resolveTarget,
    isConnected,
    getWorkspace,
    getWorkspaceHandle,
    getPermissionState,
  };
}
