---
# blockscape-tfod
title: Assess Obsidian plugin save via local server
status: completed
type: task
priority: normal
created_at: 2026-02-15T19:26:02Z
updated_at: 2026-02-15T19:28:55Z
---

Investigate whether the Obsidian plugin can talk to the running blockscape server (npm run server) to persist edits back into the originating Obsidian markdown file while rendering/editing Blockscape JSON in Obsidian.

Findings:
- Current plugin (`blockscape-obsidian/dist/blockscape-viewer/main.js`) instantiates Blockscape with `localBackend`, `fileOpen`, and `fileSave` set to false and never calls the server API.
- The Blockscape local-backend client expects same-origin `/api` endpoints; inside Obsidian those fetches would stay on `app://obsidian.md`, not `http://127.0.0.1:4173`.
- Writing back into a note would need new plugin code to capture edits and call `vault.modify` (or a configurable backend base URL plus a note rewrite). None of that exists today.

Conclusion: the shipped Obsidian plugin is view-only; saving back to the markdown file via the local server is not supported without new plugin work.