# MkDocs Blockscape Extension (Example)

This folder contains a working MkDocs project that renders Blockscape maps from fenced code blocks.

## Prerequisites

- Node 18+ (for building the Svelte bundle)
- Python + `mkdocs` (e.g., `pip install mkdocs`)

## Build the Svelte assets into MkDocs

From the repo root:

```sh
npm install        # first time only
npm run export     # writes docs/site_assets/blockscape/{blockscape.js,blockscape.css,mount.js}
```

The `export` script builds the Svelte bundle as a library (no HTML) and drops the three files directly into `mkdocs-blockscape/docs/site_assets/blockscape/`. Keeping assets under `docs/` lets `mkdocs serve` and `mkdocs build` include them automatically.

## Run the example site locally

```sh
cd mkdocs-blockscape
PYTHONPATH=mkdocs-blockscape mkdocs serve
```

Open the served URL (usually http://127.0.0.1:8000/). The config in `mkdocs.yml` already wires in the CSS/JS from `site_assets/blockscape/`.

## Authoring a map in Markdown

Use a fenced block with the `blockscape` language:

```md
```blockscape
{ valid JSON }
```
```

The extension (`mkdocs_blockscape/extension.py`) transforms the fence into:

```html
<div class="blockscape-root">
  <script type="application/json" class="blockscape-seed">
    …your JSON…
  </script>
</div>
```

`blockscape.js` (the Svelte bundle) attaches to `window.Blockscape`, and `mount.js` scans for `.blockscape-root` elements to instantiate the UI for each seed it finds.

## Design principles

- MkDocs owns content; Svelte owns rendering
- No HTML exported from Svelte—only JS/CSS + a tiny bootloader
- Multiple instances per page work automatically
