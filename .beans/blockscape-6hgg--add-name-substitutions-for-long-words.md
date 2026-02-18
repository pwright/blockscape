---
# blockscape-6hgg
title: Add name substitutions for long words
status: completed
type: task
created_at: 2026-02-18T12:00:43Z
updated_at: 2026-02-18T12:00:43Z
---

Scan svelte/public/*.bs for long words in names and expand scripts/name_substitutions.json with sensible short forms (e.g., telecommunications->telecoms).

## Checklist
- [x] Extract long name tokens from svelte/public/*.bs
- [x] Propose concise substitutions and update scripts/name_substitutions.json
- [x] Validate tidy_bs.py runs with new substitutions (dry-run) and mark completed
