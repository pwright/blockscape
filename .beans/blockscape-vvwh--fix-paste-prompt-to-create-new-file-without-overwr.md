---
# blockscape-vvwh
title: Fix paste prompt to create new file without overwriting active
status: completed
type: bug
priority: normal
created_at: 2026-01-30T16:49:29Z
updated_at: 2026-01-30T16:52:39Z
---

Paste prompt appears, but active file path doesn't change, so Save overwrites the current file. Ensure paste/import that prompts for new file results in a new active file path and safe save behavior.

## Checklist
- [x] Find paste/import flow and prompt logic
- [x] Determine how active file path is tracked
- [x] Update flow to set new file path or force Save As after paste
- [x] Verify Save no longer overwrites previous active file
