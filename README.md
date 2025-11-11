# Blockscape

[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/pwright/blockscape)

A simple, interactive web application for creating and visualizing landscape-style tiles that represent value chains, system architectures, or any hierarchical dependency relationships.

## Features

- **Interactive Tile Visualization**: Drag-and-drop interface for organizing components
- **Dependency Visualization**: Visual connections showing dependencies between components
- **Multiple Models**: Support for multiple landscape models with easy switching
- **Search & Filter**: Real-time search across all components
- **JSON Import/Export**: Load models from JSON files or paste directly
- **Template System**: Built-in templates for common domains
- **Responsive Design**: Works on desktop and mobile devices

See https://pwright.github.io/blockscape/ and try switching from:

* Seed Template - attempts to show components of this project
* Skupper Template - shows components of skupper.io

## Quick Start

1. Open `index.html` in your web browser
2. Use the [prompt](map-generation-prompt.md) to generate json for your domain.
3. Open https://pwright.github.io/blockscape/ and paste json to *Append model*.
4. Drag tiles to reorder within categories
5. Click tiles to see dependency relationships
6. Use the search box to filter components
7. Right click item to see html items, see [items](items/README.md)

## JSON Schema

Blockscape uses a simple JSON schema to define landscape models:

```json
{
  "id": "model-id",
  "title": "Model Title",
  "abstract": "Optional HTML/markdown string shown above the grid",
  "categories": [
    {
      "id": "category-id",
      "title": "Category Title",
      "items": [
        {
          "id": "item-id",
          "name": "Item Name",
          "deps": ["dependency-id-1", "dependency-id-2"],
          "logo": "path/to/logo.svg",
          "external": "https://example.com/docs/component"
        }
      ]
    }
  ]
}
```

### Schema Fields

- **id**: Required. Canonical identifier for the model (lowercase, hyphen/underscore ok)
- **title**: Required. Human-friendly title shown in pickers and share links
- **abstract**: Optional but recommended. Short HTML/textual description rendered ahead of the categories
- **categories**: Array of category objects
  - **id**: Short, unique identifier (lowercase, hyphenated)
  - **title**: Human-friendly category name
  - **items**: Array of component objects
    - **id**: Short, unique identifier across all categories
    - **name**: Human-friendly component name
    - **deps**: Array of item IDs this component depends on
    - **logo**: Optional path to logo image
    - **external**: Optional URL for an external reference (docs, gists, etc.). When present the tile gains a dashed border and a launch icon that opens the link in a new tab.
- **links**: Optional array of additional dependency links

## Visual Indicators

- **Blue border**: Dependencies (items this component enables)
- **Red border**: Dependents (items that depend on this component)
- **Orange badge**: Reused components (used by multiple other components)
- **Dashed border + ↗ icon**: External reference link available

## Built-in Templates

The application includes two example templates:

1. **Blockscape**: A generic value chain template showing communication effects, inputs, modeling, rendering, and outputs
2. **NFR**: Explore non functional requirements
3. **Deployments**

## Usage

### Creating a New Model

1. Click "Add JSON files" to load from files, or
2. Use the JSON editor at the top to paste your model
3. Click "Append model(s)" to add to existing models
4. Use the model selector to switch between models

### Editing Models

1. Select a model 
2. Click **Edit**
3. When you're finished editing, click **View**

NOTE: This process creates new tabs in your browser.


## Development

This is a client-side only application with no build process required. Simply open `index.html` in a web browser to run the application.

### Adding New Logos

1. Add SVG files to the `logos/` directory
2. Reference them in your JSON model using the path `"logos/filename.svg"`

### End-to-end Tests

Two Cypress specs exercise both entry points:

- `cypress/e2e/model-preview.cy.js` (landing page preview workflow)
- `cypress/e2e/editor-workflow.cy.js` (JSON editor CRUD + reorder workflow)

Steps:

1. Install dependencies with `npm install`
2. In the first terminal, start the static server and leave it running: `npm run serve`
3. In another terminal (and after unsetting Electron overrides with `unset ELECTRON_RUN_AS_NODE ELECTRON_NO_ATTACH_CONSOLE` if they are present), run:
   - Headless: `npm run cypress:run`
   - Interactive: `npm run cypress:open`
   - JSON report + artefacts: `npm run cypress:report` (writes `cypress/results/report.json`, videos, and failure screenshots)

See `cypress.md` for troubleshooting notes and more detail on the captured artefacts.

## License

This project is open source. See the GitHub repository for license details.

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests on the GitHub repository.
