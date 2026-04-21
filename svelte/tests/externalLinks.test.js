import { afterEach, describe, expect, it, vi } from "vitest";

import {
  normalizeExternalHref,
  openExternalUrl,
  resolveHref,
} from "../src/externalLinks";

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

function stubWindow(overrides = {}) {
  const baseWindow = {
    location: {
      href: "https://blockscape.test/maps/current",
      origin: "https://blockscape.test",
    },
    open: vi.fn(),
    ...overrides,
  };
  vi.stubGlobal("window", baseWindow);
  return baseWindow;
}

describe("externalLinks", () => {
  it("unwraps markdown-style external values", () => {
    expect(
      normalizeExternalHref("[Service docs](https://example.com/s-service/)")
    ).toBe("https://example.com/s-service/");
    expect(
      normalizeExternalHref(
        'See [Service docs](https://example.com/reference?q=(alpha)) for details'
      )
    ).toBe("https://example.com/reference?q=(alpha)");
  });

  it("resolves markdown-style relative links against the current page", () => {
    stubWindow();

    expect(resolveHref("[Catalog](?load=models.bs)")).toBe(
      "https://blockscape.test/maps/current?load=models.bs"
    );
  });

  it("opens the underlying URL for markdown-style external values", () => {
    const windowMock = stubWindow();

    expect(
      openExternalUrl("[Service docs](https://example.com/s-service/)")
    ).toBe(true);
    expect(windowMock.open).toHaveBeenCalledWith(
      "https://example.com/s-service/",
      "_blank",
      "noopener"
    );
  });
});
