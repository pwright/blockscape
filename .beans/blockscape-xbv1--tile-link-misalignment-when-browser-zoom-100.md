---
# blockscape-xbv1
title: Tile link misalignment when browser zoom !=100%
status: in-progress
type: bug
created_at: 2026-02-14T16:08:38Z
updated_at: 2026-02-14T16:08:38Z
---

Investigate and fix misaligned connector lines between tiles when page zoom is not 100%. Reproduce, identify root cause (likely canvas/SVG scaling or transform issues), implement fix, add test or visual check, and verify at multiple zoom levels.

## Checklist
- [ ] Reproduce link misalignment at multiple zoom levels and record current behavior.
- [ ] Locate rendering code for tile connectors and identify scaling/positioning logic.
- [ ] Implement fix to keep connectors aligned when zoomed.
- [ ] Add regression coverage (visual check or automated test if feasible).
- [ ] Verify across common zoom levels (90%, 100%, 110%, 125%) in major browsers.
