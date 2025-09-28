# Blockscape

A simple, interactive web application for creating and visualizing landscape-style tiles that represent value chains, system architectures, or any hierarchical dependency relationships.

## Features

- **Interactive Tile Visualization**: Drag-and-drop interface for organizing components
- **Dependency Visualization**: Visual connections showing dependencies between components
- **Multiple Models**: Support for multiple landscape models with easy switching
- **Search & Filter**: Real-time search across all components
- **JSON Import/Export**: Load models from JSON files or paste directly
- **Template System**: Built-in templates for common domains
- **Responsive Design**: Works on desktop and mobile devices

## Quick Start

1. Open `index.html` in your web browser
2. Use the built-in templates or create your own JSON model
3. Drag tiles to reorder within categories
4. Click tiles to see dependency relationships
5. Use the search box to filter components

## JSON Schema

Blockscape uses a simple JSON schema to define landscape models:

```json
{
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
          "external": true
        }
      ]
    }
  ],
  "links": [
    {
      "from": "source-item-id",
      "to": "target-item-id"
    }
  ]
}
```

### Schema Fields

- **categories**: Array of category objects
  - **id**: Short, unique identifier (lowercase, hyphenated)
  - **title**: Human-friendly category name
  - **items**: Array of component objects
    - **id**: Short, unique identifier across all categories
    - **name**: Human-friendly component name
    - **deps**: Array of item IDs this component depends on
    - **logo**: Optional path to logo image
    - **external**: Optional boolean for external dependencies
- **links**: Optional array of additional dependency links

## Visual Indicators

- **Blue border**: Dependencies (items this component enables)
- **Red border**: Dependents (items that depend on this component)
- **Orange badge**: Reused components (used by multiple other components)
- **Dashed border**: External dependencies

## Built-in Templates

The application includes two example templates:

1. **Seed Template**: A generic value chain template showing communication effects, inputs, modeling, rendering, and outputs
2. **Skupper Template**: A specific example for the Skupper networking project

## Usage

### Creating a New Model

1. Click "Add JSON files" to load from files, or
2. Use the JSON editor at the top to paste your model
3. Click "Append model(s)" to add to existing models
4. Use the model selector to switch between models

### Editing Models

1. Select a model from the dropdown
2. Edit the JSON in the text area
3. Click "Replace active with JSON" to update the model
4. Changes are immediately reflected in the visualization

### Reordering Components

1. Drag tiles within the same category to reorder them
2. The JSON will be automatically updated to reflect the new order

## File Structure

```
blockscape/
├── index.html              # Main application file
├── logos/                  # Logo assets
│   ├── Docker.svg
│   ├── k8s.svg
│   ├── Podman.svg
│   ├── skupper-logo.svg
│   └── systemd.svg
├── template-generation-prompt.md  # AI prompt template for generating models
└── README.md              # This file
```

## Development

This is a client-side only application with no build process required. Simply open `index.html` in a web browser to run the application.

### Adding New Logos

1. Add SVG files to the `logos/` directory
2. Reference them in your JSON model using the path `"logos/filename.svg"`

## License

This project is open source. See the GitHub repository for license details.

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests on the GitHub repository.

## Related Projects

- [Skupper](https://skupper.io/) - The multi-cluster communication layer used in the example template
