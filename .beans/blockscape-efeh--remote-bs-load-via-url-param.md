---
# blockscape-efeh
title: Remote bs load via URL param
status: in-progress
type: feature
created_at: 2026-02-19T11:37:43Z
updated_at: 2026-02-19T11:37:43Z
---

Add support for loading a remote .bs file when a URL parameter (e.g. load=https://.../file.bs) is provided so users can open shared configs directly.

## Checklist
- [x] Locate the code path that loads .bs files and URL param handling
- [x] Add support for a load=<url> param that fetches a remote .bs file (CORS-safe)
- [x] Parse and load the fetched content using the existing loader
- [x] Handle errors (bad URL, fetch failure, parse error) with user feedback
 - [x] Add/update tests or docs to describe the new URL format
