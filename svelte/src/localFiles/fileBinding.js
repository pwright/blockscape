import { assertProviderRelativePath, normalizeProviderRelativePath } from "./pathPolicy.js";

export const BROWSER_FILE_PROVIDER = "browser-fsa";

export function createBrowserFileTarget(path) {
  return {
    kind: "workspace-file",
    path: assertProviderRelativePath(path),
  };
}

export function createBrowserFileBinding(
  path,
  { revision = null, autosaveEnabled = true } = {}
) {
  const target = createBrowserFileTarget(path);
  return {
    provider: BROWSER_FILE_PROVIDER,
    target,
    displayPath: target.path,
    revision: normalizeRevisionSnapshot(revision),
    autosaveEnabled: Boolean(autosaveEnabled),
  };
}

export function isBrowserFileBinding(binding) {
  return (
    !!binding &&
    binding.provider === BROWSER_FILE_PROVIDER &&
    normalizeProviderRelativePath(binding.target?.path) === binding.target?.path
  );
}

export function getBrowserFileBindingPath(binding) {
  return isBrowserFileBinding(binding) ? binding.target.path : "";
}

export function bindingFromBrowserAutosavePath(path, options = {}) {
  const normalized = normalizeProviderRelativePath(path);
  return normalized ? createBrowserFileBinding(normalized, options) : null;
}

export function ensureBrowserFileBinding(entry, options = {}) {
  if (!entry || typeof entry !== "object") return null;
  if (isBrowserFileBinding(entry.fileBinding)) return entry.fileBinding;

  const binding = bindingFromBrowserAutosavePath(
    entry.browserAutosavePath,
    options
  );
  if (binding) {
    entry.fileBinding = binding;
  }
  return binding;
}

export function normalizeRevisionSnapshot(revision) {
  if (!revision) return null;
  const lastModified = Number(revision.lastModified);
  const size = Number(revision.size);
  return {
    lastModified: Number.isFinite(lastModified) ? lastModified : null,
    size: Number.isFinite(size) ? size : null,
  };
}

export function sameRevisionSnapshot(left, right) {
  const a = normalizeRevisionSnapshot(left);
  const b = normalizeRevisionSnapshot(right);
  if (!a || !b) return false;
  return a.lastModified === b.lastModified && a.size === b.size;
}
