export function canUseNeutralino() {
  return (
    typeof window !== "undefined" &&
    window.Neutralino &&
    window.Neutralino.os &&
    typeof window.Neutralino.os.open === "function"
  );
}

function extractMarkdownLinkHref(value) {
  const text = (value ?? "").toString().trim();
  if (!text.includes("](")) return "";

  for (let start = text.indexOf("["); start !== -1; start = text.indexOf("[", start + 1)) {
    let labelEnd = -1;
    for (let index = start + 1; index < text.length; index += 1) {
      const char = text[index];
      if (char === "\\") {
        index += 1;
        continue;
      }
      if (char === "]") {
        labelEnd = index;
        break;
      }
    }
    if (labelEnd === -1 || text[labelEnd + 1] !== "(") continue;

    let depth = 0;
    for (let index = labelEnd + 2; index < text.length; index += 1) {
      const char = text[index];
      if (char === "\\") {
        index += 1;
        continue;
      }
      if (char === "(") {
        depth += 1;
        continue;
      }
      if (char !== ")") continue;
      if (depth > 0) {
        depth -= 1;
        continue;
      }
      const rawTarget = text.slice(labelEnd + 2, index).trim();
      if (!rawTarget) return "";
      const angleWrapped = rawTarget.match(/^<([^>]+)>(?:\s+["'][^"']*["'])?$/);
      if (angleWrapped) return angleWrapped[1];
      const titled = rawTarget.match(/^(\S+?)(?:\s+["'][^"']*["'])?$/);
      return titled ? titled[1] : rawTarget;
    }
  }

  return "";
}

export function normalizeExternalHref(value) {
  const text = (value ?? "").toString().trim();
  if (!text) return "";
  return extractMarkdownLinkHref(text) || text;
}

export function openExternalUrl(url) {
  const normalizedUrl = normalizeExternalHref(url);
  if (!normalizedUrl) return false;
  if (canUseNeutralino()) {
    try {
      window.Neutralino.os.open(normalizedUrl);
      return true;
    } catch (error) {
      console.warn("[Blockscape] failed to open external url", normalizedUrl, error);
    }
  }
  window.open(normalizedUrl, "_blank", "noopener");
  return true;
}

export function isExternalHref(href) {
  const normalizedHref = normalizeExternalHref(href);
  if (!normalizedHref || normalizedHref.startsWith("#") || /^javascript:/i.test(normalizedHref)) {
    return false;
  }
  try {
    const parsed = new URL(normalizedHref, window.location.href);
    if (parsed.protocol === "http:" || parsed.protocol === "https:") {
      return parsed.origin !== window.location.origin;
    }
    return true;
  } catch {
    return false;
  }
}

export function resolveHref(href) {
  const normalizedHref = normalizeExternalHref(href);
  try {
    return new URL(normalizedHref, window.location.href).toString();
  } catch {
    return normalizedHref;
  }
}
