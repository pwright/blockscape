---
# blockscape-4vm5
title: Lower tidy_bs substitution threshold to 14
status: completed
type: task
created_at: 2026-02-18T12:07:07Z
updated_at: 2026-02-18T12:07:07Z
---

Change tidy_bs.py --min-sub-length default from 32 to 14 so substitutions like Telecommunications -> Telecoms apply.

## Checklist
- [x] Update tidy_bs.py default for --min-sub-length to 14 and adjust help text
- [x] Sync docs (scripts/README.md and scripts/usage.md) to new default
- [x] Verify dry-run hits Telecommunications after change; mark bean completed
