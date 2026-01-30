---
# blockscape-2px0
title: Prevent autosave prompt on Neutralino startup
status: completed
type: bug
priority: normal
created_at: 2026-01-30T11:56:58Z
updated_at: 2026-01-30T11:57:49Z
---

Neutralino viewer prompts to save on app load due to autosave with no path; avoid prompting until user edits or explicitly saves.

## Checklist
- [x] Confirm autosave prompts on fresh launch
- [x] Adjust startup autosave state to avoid immediate save prompt
- [x] Verify autosave prompts only after user edits
