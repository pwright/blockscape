---
# blockscape-v2ab
title: New map retains previous filepath on save
status: in-progress
type: bug
created_at: 2026-02-02T17:08:10Z
updated_at: 2026-02-02T17:08:10Z
---

When creating a 'New' blank map, the previous filepath remains active and Save overwrites the prior file. Fix should clear/reset the active filepath on New so Save prompts or saves to new file.\n\n## Checklist\n- [x] Locate where New map is created and active filepath is stored\n- [x] Ensure filepath state is cleared/reset on New\n- [ ] Verify Save behavior uses new/cleared path
