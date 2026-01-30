---
# blockscape-8xuh
title: Investigate Neutralino .bs file not displaying
status: in-progress
type: bug
priority: normal
created_at: 2026-01-30T09:39:51Z
updated_at: 2026-01-30T12:05:42Z
---

User reports that opening a .bs file in the Neutralino app does not display content. Investigate file open path, parsing, and UI rendering when loading .bs files.

## Checklist
- [ ] Reproduce the issue with a known .bs file in the Neutralino app
- [x] Trace the file open/read path and confirm content reaches the renderer
- [x] Identify and fix the rendering/parsing failure
- [x] Add logging for Neutralino file open to confirm path/parse
- [x] Add logging for applyTextToViewer flow
- [x] Add logging for jsonBox/append button state
- [x] Add editor-transfer fallback when jsonBox/append missing
- [ ] Verify the .bs file displays after the fix
