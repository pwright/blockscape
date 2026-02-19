---
# blockscape-b0gz
title: Restore Blockscape Obsidian layout & overlay fixes
status: in-progress
type: bug
created_at: 2026-02-15T15:07:06Z
updated_at: 2026-02-15T15:07:06Z
---

Recreate lost plugin source files and reapply Obsidian-only layout tweaks (fixed width, tile alignment, badge/text stacking), series panel layout, and overlay link alignment/scroll sync. Build plugin after restoring.

2026-02-18: Added build number watermark and automated bump script (`npm run package` now increments build.json and stamps main.js). Overlay now fixed+translated to root bounds for correct line alignment.
2026-02-18 late: Reverted to legacy overlay anchoring (absolute, width/height 100%, sized to root rect) per obs-working baseline; build #22 packaged.

## Checklist
- [x] Recreate plugin scaffold (manifest, main entry, styles, assets folder)
- [x] Copy viewer assets (blockscape.js/css/mount.js) into plugin
- [x] Add Obsidian-specific style overrides (fixed width, tile alignment, overlay CSS var)
- [x] Implement markdown code block renderer and overlay offset logic
- [ ] Verify rendering in Obsidian preview including link alignment and series panel
