import { BROWSER_FILE_PROVIDER } from "./fileBinding.js";
import { assertProviderRelativePath } from "./pathPolicy.js";

export const RECOVERY_DRAFT_STORE = "drafts";

export function getRecoveryDraftEntryId(entry) {
  if (!entry || typeof entry !== "object") return "";
  return (
    entry.id ||
    entry.data?.id ||
    entry.data?.m?.id ||
    entry.apicurioArtifactId ||
    ""
  )
    .toString()
    .trim();
}

export function createRecoveryDraftKey({
  entryId,
  provider = BROWSER_FILE_PROVIDER,
  path,
} = {}) {
  const normalizedEntryId = (entryId || "").toString().trim();
  if (!normalizedEntryId) {
    throw new Error("Recovery draft requires an entry id.");
  }
  const normalizedPath = assertProviderRelativePath(path);
  return `${provider}:${encodeURIComponent(normalizedEntryId)}:${encodeURIComponent(
    normalizedPath
  )}`;
}

export function createBrowserRecoveryDraftKey(entry, path) {
  return createRecoveryDraftKey({
    entryId: getRecoveryDraftEntryId(entry),
    provider: BROWSER_FILE_PROVIDER,
    path,
  });
}

function idbRequest(request) {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export function createIndexedDbDraftAdapter(
  db,
  { storeName = RECOVERY_DRAFT_STORE } = {}
) {
  return {
    get(key) {
      const tx = db.transaction(storeName, "readonly");
      return idbRequest(tx.objectStore(storeName).get(key));
    },
    put(record) {
      const tx = db.transaction(storeName, "readwrite");
      return idbRequest(tx.objectStore(storeName).put(record));
    },
    delete(key) {
      const tx = db.transaction(storeName, "readwrite");
      return idbRequest(tx.objectStore(storeName).delete(key));
    },
  };
}

export function createRecoveryDraftStore({
  adapter,
  getNow = () => Date.now(),
} = {}) {
  if (!adapter) {
    throw new Error("Recovery draft store requires a storage adapter.");
  }

  async function remember({ entry, path, text, metadata = {} } = {}) {
    if (typeof text !== "string") return null;
    const key = createBrowserRecoveryDraftKey(entry, path);
    const record = {
      filename: key,
      key,
      entryId: getRecoveryDraftEntryId(entry),
      provider: BROWSER_FILE_PROVIDER,
      path: assertProviderRelativePath(path),
      text,
      metadata,
      updatedAt: getNow(),
    };
    await adapter.put(record);
    return record;
  }

  async function get({ entry, path } = {}) {
    const key = createBrowserRecoveryDraftKey(entry, path);
    return (await adapter.get(key)) || null;
  }

  async function clear({ entry, path } = {}) {
    const key = createBrowserRecoveryDraftKey(entry, path);
    await adapter.delete(key);
  }

  async function clearAfterSuccessfulWrite({ entry, path, writtenPath } = {}) {
    const normalizedPath = assertProviderRelativePath(path);
    const normalizedWrittenPath = assertProviderRelativePath(writtenPath);
    if (normalizedPath !== normalizedWrittenPath) return false;
    await clear({ entry, path: normalizedPath });
    return true;
  }

  return {
    remember,
    get,
    clear,
    clearAfterSuccessfulWrite,
  };
}
