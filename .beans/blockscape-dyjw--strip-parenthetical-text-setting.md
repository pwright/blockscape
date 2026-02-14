---
# blockscape-dyjw
title: Strip parenthetical text setting
status: in-progress
type: feature
created_at: 2026-02-14T15:37:52Z
updated_at: 2026-02-14T15:37:52Z
---

Add a setting (default on) that displays item names without trailing parenthetical details, e.g., 'name (detail)' renders as 'name'. Apply to item listings where names appear. Ensure toggle exists and persists with existing settings system.

## Checklist
- [x] Locate item name rendering path and existing settings store
- [x] Add default-on setting flag to hide parenthetical suffixes
- [x] Apply display logic to strip trailing parenthetical text
- [ ] Add tests or coverage for new behavior and default
- [x] Update docs/UI strings for the new setting
