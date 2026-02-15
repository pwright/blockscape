---
# blockscape-b0gz
title: Restore Blockscape Obsidian layout & overlay fixes
status: in-progress
type: bug
created_at: 2026-02-15T15:07:06Z
updated_at: 2026-02-15T15:07:06Z
---

Recreate lost plugin source files and reapply Obsidian-only layout tweaks (fixed width, tile alignment, badge/text stacking), series panel layout, and overlay link alignment/scroll sync. Build plugin after restoring.

## Checklist
- [x] Recreate plugin scaffold (manifest, main entry, styles, assets folder)
- [x] Copy viewer assets (blockscape.js/css/mount.js) into plugin
- [x] Add Obsidian-specific style overrides (fixed width, tile alignment, overlay CSS var)
- [x] Implement markdown code block renderer and overlay offset logic
- [ ] Verify rendering in Obsidian preview including link alignment and series panel
