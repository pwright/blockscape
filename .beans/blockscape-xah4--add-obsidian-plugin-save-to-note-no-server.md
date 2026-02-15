---
# blockscape-xah4
title: Add Obsidian plugin save-to-note (no server)
status: completed
type: feature
priority: normal
created_at: 2026-02-15T19:33:21Z
updated_at: 2026-02-15T19:36:15Z
---

Implemented in-place note saving for Obsidian plugin (Option 2). Changes in blockscape-obsidian/dist/blockscape-viewer/main.js:
- Load Notice and TFile from obsidian API.
- Pass context into renderer and inject a Save bar with status + button.
- On Save, read current JSON from the embedded editor, validate/pretty-print, and replace the originating code block (or append if missing) via vault.modify. Shows Notices on success/failure.

No reliance on local server; writes directly to the source note.