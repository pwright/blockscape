---
# blockscape-5c62
title: Add autosave toggle to Obsidian plugin
status: completed
type: feature
priority: normal
created_at: 2026-02-15T19:53:39Z
updated_at: 2026-02-15T19:54:01Z
---

Added autosave toggle to Obsidian plugin bundle. Changes in blockscape-obsidian/dist/blockscape-viewer/main.js:
- Load/persist autosave preference via localStorage (default on).
- Save bar now includes an "Autosave on blur" checkbox; status shows "Autosave off" when disabled.
- Blur-triggered saves respect the toggle; scheduling aborted when off.
- Layout adjusted to fit toggle + status + Save button.