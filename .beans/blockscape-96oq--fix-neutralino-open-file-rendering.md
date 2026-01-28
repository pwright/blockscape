---
# blockscape-96oq
title: Fix Neutralino open file rendering
status: completed
type: task
priority: normal
created_at: 2026-01-28T19:28:35Z
updated_at: 2026-01-28T19:04:25Z
---

Make Open decode file contents correctly and ensure map renders when loading files.

## Checklist
- [x] Make file read robust to encoding/ArrayBuffer
- [x] Ensure open uses decoded text
