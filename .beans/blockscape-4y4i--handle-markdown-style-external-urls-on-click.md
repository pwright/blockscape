---
# blockscape-4y4i
title: Handle markdown-style external URLs on click
status: in-progress
type: bug
priority: normal
created_at: 2026-04-21T09:50:42Z
updated_at: 2026-04-21T09:53:58Z
---

Recognize external values that contain markdown-style links and open the underlying URL when the user clicks the external action.

- [x] Inspect external link normalization and click handling
- [x] Implement markdown-style URL extraction for external clicks
- [x] Add or update tests covering markdown-style external values
- [ ] Verify the affected test suite

## Notes

`npm run test:unit -- ...` could not be completed in this workspace because the `vitest` binary is not installed, even though the script exists in `package.json`. The change was sanity-checked with `node --input-type=module` against the updated external link helpers.
