# Blockscape

[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/pwright/blockscape)

A simple, interactive web application for creating and visualizing landscape-style tiles that represent value chains, system architectures, or any hierarchical dependency relationships.


## Quick Start

1. Open `index.html` in your web browser
2. Use the [prompt](map-generation-prompt.md) to generate json for your domain.
3. Open https://pwright.github.io/blockscape/ and paste json (cmd-v or ctrl-v)
4. Click tiles to see dependency relationships
5. Click `Edit` to manually change the currently selected it (or whole map).

## Blockscape: mapping the architectural lifecycle, not just the system

Architectural diagrams capture *structure*.  
Wardley Maps capture *evolution*.  
**Blockscape** can unify both — by making architecture **narrative, dynamic, and co-evolving** with design intent.

Instead of being another “draw a diagram” tool, *Blockscape* becomes the **canvas for strategic system literacy** — where AI-generated structure meets human contextual intelligence.

## 🔁 A lifecycle built for hybrid reasoning

Let’s illustrate your proposed lifecycle using ASCII metaphors:

---

### **1\. LLM blockscape generation — rapid topology seeding**

LLM reads docs / repo / infra manifests → generates base map

Use [GPT](https://chatgpt.com/g/g-690f6217889c819191786ef16481f534-blockscape)
or [prompt](map-generation-prompt.md) to generate json for your domain.


🧠 **Value:**  
The LLM can quickly create a **Wardley-like skeleton**: all visible components, dependencies, and rough placement along the evolution axis.  
It replaces hours of manual “whiteboard archaeology.”


### **2\. Manual editing — human sense-making**

Engineers adjust positions, rename blocks, add missing context:

🛠 **Value:**  
Humans know subtleties: “This service is innovative” or “This dependency is a liability.”  
They embed lived knowledge — things not yet in code or docs.

### **3\. LLM refinement — structural intelligence**

The LLM reanalyzes edits to:

- Normalize naming
- Suggest missing dependencies
- Recommend repositioning based on patterns
- Optionally generate narrative summaries (“your differentiator is shifting from data pipelines to analytics”)

🧩 **Value:**  
This creates **symmetry between architecture and strategy** — the LLM reasons from patterns, humans correct nuance.

### **4\. Manual editing — strategic judgment**

The human layer again asserts intention:

- “We *choose* to keep item on left because we're working on developing that item.”
- “We’ll outsource this commodity, shift the item to the right”
- “Let’s flag this as risk.”

This is the **decision recording step**, not the design correction step.


🧭 **Value:**  
Maps become living documents — not static outputs, but design conversations.

---

### **5\. LLM add ‘external’ links — ecosystem integration**

Finally, the LLM can add links to `external` references:

- GitHub repos
- ADRs
- RFCs
- Docs and diagrams
- Product roadmaps
- Vendor APIs

🔗 **Value:**  
The map stops being a picture — it becomes an *index of reality*.  
Every node connects outward, making the system traceable and auditable.

## 🚀 Why this lifecycle matters

| Phase | AI Strength | Human Strength | Outcome |
| --- | --- | --- | --- |
| Generation | Speed, recall | Context | Draft from chaos |
| Manual edit | Insight | Strategy | Intent embedded |
| Refinement | Consistency | Validation | Smarter structure |
| Manual judgment | Tradeoffs | Accountability | Actionable decision |
| External linking | Search & correlate | Curate relevance | Knowledge graph |

Together, this yields a **living, evolving architectural landscape** — a *blockscape* — where maps can be regenerated and reinterpreted as systems evolve.

---

## 🧩 Why this is strategically powerful

1. **Closes the loop** between *architecture-as-built* and *architecture-as-strategic*.
2. **Bridges AI and human expertise** — neither replaces the other.
3. **Creates artifacts that age gracefully** — maps remain relevant as the system evolves.
4. **Positions Blockscape as the “Wardley Maps for Systems”** — but with LLM-assisted lifecycle management.


## ✨ In short

> **Blockscape** turns architecture into a conversation between humans and machines —  
> starting with AI’s speed, grounded by human judgment, and expanded by linked knowledge.

The skeptic who values architecture diagrams gains something extra:

- Not *another* diagramming tool, but
- A *thinking tool* that explains **why** their architecture should evolve in certain directions — and helps the system documentation keep pace.

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
