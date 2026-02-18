# Using Blockscape in Obsidian

Blockscape ships with a prebuilt Obsidian community plugin that renders maps and series directly inside notes.

## Install the plugin

- Run `npm run export` (or `npm run build`) to refresh the Blockscape JS/CSS in `blockscape-obsidian/dist/blockscape-viewer/assets/` (synced by the postexport hook).
- Copy `blockscape-obsidian/dist/blockscape-viewer` into your vault's `.obsidian/plugins/` directory, or unzip `blockscape-obsidian/dist/blockscape-viewer-0.0.1.zip` there.
- Reload Obsidian and enable **Blockscape Viewer** under Community Plugins (the bundle is desktop-only per the manifest).

## Add a map to a note

Create a fenced code block with `blockscape` (or `bs`) containing your map JSON:

````
```blockscape
{
  "title": "Demo map",
  "categories": []
}
```
````

The plugin renders the interactive Blockscape view inline with local file access disabled.

## Edit and save

- Use **Save to note** above the render to rewrite the fenced block with formatted JSON; autosave on blur is on by default and can be toggled.
- **Show header** toggles the Blockscape header bar; the choice and other viewer settings persist per vault.
- Series seeds (arrays) are preserved—the plugin updates the matching entry when an item id matches; otherwise it replaces the first entry.

## Update the plugin bundle

After UI changes, rerun `npm run export` to copy the latest viewer assets into the plugin bundle. To share the plugin, package it from `blockscape-obsidian/` with `npm run package` and distribute `blockscape-viewer-0.0.1.zip`.
