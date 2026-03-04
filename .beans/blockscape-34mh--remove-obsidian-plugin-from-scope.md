---
# blockscape-34mh
title: Remove Obsidian plugin from scope
status: completed
type: task
created_at: 2026-03-02T11:59:58Z
updated_at: 2026-03-02T12:25:00Z
---

User asked to remove the Obsidian plugin from the project scope. Clean out plugin code/deps and ensure build still works without it.

## Checklist
- [x] Locate all references to the Obsidian plugin (files, config, dependencies)
- [x] Remove plugin code/assets and uninstall related dependencies
- [x] Update configs/docs/build outputs so site builds without the plugin
- [x] Run build or tests to confirm no regressions
