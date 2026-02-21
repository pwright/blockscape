---
# blockscape-7lcz
title: Fix shadow DOM runtime errors
status: completed
type: bug
created_at: 2026-02-20T18:55:14Z
updated_at: 2026-02-20T18:55:14Z
---

Shadow DOM change broke Blockscape viewer in Obsidian (missing host append, auto-boot IIFE crash). Strip auto-boot and attach host to container.