---
# blockscape-hh2z
title: 'Regression: connecting lines missing in Obsidian'
status: in-progress
type: bug
created_at: 2026-02-18T22:49:10Z
updated_at: 2026-02-18T22:49:10Z
---

Connecting lines between panel coins no longer visible when viewing in Obsidian. Likely regression after recent changes. Need to reproduce and restore visibility.

## Checklist
- [ ] Reproduce in Obsidian preview and identify expected behavior reference.
- [x] Find root cause in docs/svelte styles for connecting lines.
- [x] Implement fix and verify in Obsidian and built docs.
- [ ] Update related docs/screenshots if needed.
- [x] Run relevant checks (build) and note results.

Investigated Obsidian plugin overlay; `.svg-layer` was sized via `width/height:100%` which collapses when parent height is auto in Obsidian, preventing dependency lines from rendering. Final fix: viewport-fixed overlay translated to the centered root bounds so line coordinates align. Built plugin with new build stamp system (`npm run package` -> build #7).
