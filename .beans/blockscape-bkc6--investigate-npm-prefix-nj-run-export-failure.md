---
# blockscape-bkc6
title: Investigate npm --prefix nj run export failure
status: completed
type: bug
priority: normal
created_at: 2026-02-18T09:41:16Z
updated_at: 2026-02-18T09:42:10Z
---

Findings: Running 'npm --prefix nj run export' looks for nj/package.json, but the nj folder only has Neutralino runtime assets (bin, resources, neutralino.config.json) and no package.json. Repro shows npm ENOENT for nj/package.json.

Resolution: Use the root project scripts instead: 'npm run export:nj' builds with vite.config.export.nj.mjs and copies assets into nj/resources/site_assets/blockscape. For the full Neutralino app bundle, run 'npm run build-app' which calls export:nj then 'neu build'.