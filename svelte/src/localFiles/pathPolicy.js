const DEFAULT_EXTENSION = ".bs";

function normalizeSlashes(value) {
  return value.toString().trim().replace(/\\/g, "/");
}

function extensionMatches(path, extension) {
  if (!extension) return true;
  return path.toLowerCase().endsWith(extension.toLowerCase());
}

export function validateProviderRelativePath(
  value,
  { allowHidden = false, extension = DEFAULT_EXTENSION } = {}
) {
  if (typeof value !== "string" && typeof value !== "number") {
    return { valid: false, path: "", reason: "Path must be a string." };
  }

  const path = normalizeSlashes(value);
  if (!path) {
    return { valid: false, path: "", reason: "Path is required." };
  }
  if (path.startsWith("/") || /^[a-zA-Z]:\//.test(path)) {
    return {
      valid: false,
      path,
      reason: "Path must be relative to the connected provider.",
    };
  }
  if (path.endsWith("/")) {
    return { valid: false, path, reason: "Path must include a file name." };
  }

  const parts = path.split("/");
  if (parts.some((part) => part.length === 0)) {
    return { valid: false, path, reason: "Path cannot contain empty segments." };
  }
  if (parts.some((part) => part === "." || part === "..")) {
    return {
      valid: false,
      path,
      reason: "Path cannot contain current or parent directory segments.",
    };
  }
  if (!allowHidden && parts.some((part) => part.startsWith("."))) {
    return {
      valid: false,
      path,
      reason: "Path cannot contain hidden segments.",
    };
  }
  if (!extensionMatches(path, extension)) {
    return {
      valid: false,
      path,
      reason: `Path must end with ${extension}.`,
    };
  }

  return { valid: true, path, reason: "" };
}

export function normalizeProviderRelativePath(value, options = {}) {
  const result = validateProviderRelativePath(value, options);
  return result.valid ? result.path : "";
}

export function assertProviderRelativePath(value, options = {}) {
  const result = validateProviderRelativePath(value, options);
  if (!result.valid) {
    throw new Error(`Invalid local file path: ${result.reason}`);
  }
  return result.path;
}
