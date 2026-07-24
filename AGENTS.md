# AGENTS.md



## Overview

Svelte app in `svelte/`, rendered to static site in `docs/`, build will always overwrite `docs/`.

## Commands
- Install: npm install
- Build docs: npm run build
- Run server: npm run server

## Env
- NODE_VERSION=20

## Pitfalls
- Do not delete generated HTML; rebuild instead.
- **CRITICAL: GitHub Pages publishes docs/ directory**
  - `vite build` MUST be in the build process - it creates docs/index.html
  - `docs/` is the root for GitHub Pages, not `docs/documentation/`
  - Removing `vite build` breaks both local serve and GitHub Pages deployment
  - Order matters: run `export` before `vite build` to avoid circular dependency
