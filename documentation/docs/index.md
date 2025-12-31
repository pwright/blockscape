# Blockscape

This is a blockscape map:

```blockscape
{
  "id": "wardley-2x2-minimap",
  "title": "Wardley-Inspired 2x2: Visibility vs Maturity",
  "abstract": "A useful Wardley-inspired 2x2 for quick conversations is: Y-axis = user visibility/value (top = directly user-facing, bottom = back-end/enabling), X-axis = evolution/maturity (left = novel/custom, right = commodity/standard). This helps teams decide where to differentiate (top-left), where to productize (top-right), where to industrialize (bottom-right), and where to build enabling capabilities (bottom-left).",
  "categories": [
    {
      "id": "user-facing",
      "title": "User-Facing Capabilities",
      "items": [
        {
          "id": "differentiation",
          "name": "Differentiation",
          "deps": [
            "experiments-learning",
            "custom-build"
          ]
        },
        {
          "id": "productized",
          "name": "Productized",
          "deps": [
            "standard-components",
            "managed-service"
          ]
        }
      ]
    },
    {
      "id": "shared-foundations",
      "title": "Shared Foundations",
      "items": [
        {
          "id": "experiments-learning",
          "name": "Experiments & Learning",
          "deps": []
        },
        {
          "id": "custom-build",
          "name": "Custom Build",
          "deps": []
        },
        {
          "id": "standard-components",
          "name": "Standard Components",
          "deps": []
        },
        {
          "id": "managed-service",
          "name": "Managed Services",
          "deps": []
        }
      ]
    }
  ],
  "links": [
    {
      "from": "differentiation",
      "to": "productized"
    },
    {
      "from": "genesis-bottom-left",
      "to": "utility-bottom-right"
    }
  ]
}
```