---
# blockscape-v9d2
title: Investigate Obsidian build failure
status: in-progress
type: bug
created_at: 2026-02-17T23:21:08Z
updated_at: 2026-02-17T23:21:08Z
---

User reports Obsidian build not working (possibly 'buid'). Investigate build pipeline for Obsidian integration, reproduce failure, identify root cause, propose/implement fix.

## Checklist
- [x] Reproduce root build to observe Obsidian packaging step
- [x] Inspect Obsidian packaging flow and asset locations
- [x] Add automated sync so Obsidian assets match latest export before zipping
- [ ] Verify with user that Obsidian zip now works in their IDE setup
