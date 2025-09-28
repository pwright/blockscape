# Blockscape JSON Prompt Template

Use this prompt to generate a concise value‑chain/landscape JSON for any domain. Copy, paste, and replace the bracketed placeholders.

---

## Prompt (fill in the brackets)

Generate a **Blockscape value‑chain JSON** for the domain of **[DOMAIN NAME]**.

### Requirements

* Output **valid JSON only** with the structure below (no commentary):

  * `categories`: array of category objects

    * each category has:

      * `id` (short, lowercase, unique)
      * `title` (human‑friendly)
      * `items`: array of component objects

        * each item has:

          * `id` (short, lowercase, unique across all categories)
          * `name` (human‑friendly)
          * optional `logo` (e.g., "logos/[slug].svg")
          * `deps`: array of item `id`s this item **depends on** (must reference defined items only)
* Use **3–5 categories** and **2–5 items per category**. Prefer clarity over exhaustiveness.
* Order categories roughly from **abstract to concrete**.
* Model **visible user value** via **vertical position** (things closer to the user are higher). Ensure `deps` reflect a flow from higher‑value items to their underlying enablers.
* (Optional) You may imply **horizontal evolution/maturity** via category naming or item grouping, but do not add extra fields for it.
* Keep all identifiers **ASCII**, hyphen‑separated where needed.

### Domain Guidance

In **[one paragraph]**, summarize the domain’s user‑visible goals and the key enabling components. Use that understanding to choose categories and dependencies.

### Output

Return **only the JSON** matching this schema:

```
{
  "categories": [
    {
      "id": "[category-id]",
      "title": "[Category Title]",
      "items": [
        { "id": "[item-id]", "name": "[Item Name]", "deps": ["[id]"] }
      ]
    }
  ]
}
```

### Validation Checklist (the model should self‑check before returning):

* All `deps` reference **existing** item IDs.
* No duplicate `id`s across all items.
* 3–5 categories; each has 2–5 items.
* No extra fields beyond `id`, `title`, `items`, `name`, `logo` (optional), `deps`.
* JSON parses.

---

## One‑shot Example (Machine Learning Model Deployment)

**Prompt to paste**

Generate a **Blockscape value‑chain JSON** for the domain of **machine learning model deployment**.

### Requirements

* Output **valid JSON only** with this structure (no commentary).
* Use **4 categories**, **3–4 items each**.
* Order from abstract (user‑facing) to concrete (infrastructure).
* Vertical axis is **visible user value**; `deps` should point from user‑visible items down to enablers they rely on.
* Optional `logo` paths may use placeholders like `"logos/[slug].svg"`.

### Domain Guidance

Users need **reliable predictions** surfaced via **APIs/UI**, backed by **versioned models**, **observability**, and **scalable infra**. Security and governance span across.

### Output (JSON only)

```
{
  "categories": [
    {
      "id": "experience",
      "title": "User Experience",
      "items": [
        { "id": "prediction-api", "name": "Prediction API", "deps": ["model-serving", "authz"] },
        { "id": "batch-scoring", "name": "Batch Scoring", "deps": ["feature-store", "orchestration"] },
        { "id": "ui-console", "name": "Ops Console", "deps": ["monitoring", "logging"] }
      ]
    },
    {
      "id": "models",
      "title": "Models & Data",
      "items": [
        { "id": "model-serving", "name": "Model Serving", "deps": ["container-runtime", "autoscaling"] },
        { "id": "model-registry", "name": "Model Registry", "deps": ["artifact-store"] },
        { "id": "feature-store", "name": "Feature Store", "deps": ["data-pipelines"] }
      ]
    },
    {
      "id": "platform",
      "title": "Platform Services",
      "items": [
        { "id": "monitoring", "name": "Monitoring", "deps": ["metrics-backend"] },
        { "id": "logging", "name": "Logging", "deps": ["log-backend"] },
        { "id": "authz", "name": "AuthN/Z", "deps": ["secrets"] },
        { "id": "orchestration", "name": "Orchestration", "deps": ["container-runtime"] }
      ]
    },
    {
      "id": "infrastructure",
      "title": "Infrastructure",
      "items": [
        { "id": "autoscaling", "name": "Autoscaling", "deps": ["metrics-backend"] },
        { "id": "container-runtime", "name": "Container Runtime", "deps": [] },
        { "id": "artifact-store", "name": "Artifact Store", "deps": [] },
        { "id": "data-pipelines", "name": "Data Pipelines", "deps": [] },
        { "id": "metrics-backend", "name": "Metrics Backend", "deps": [] },
        { "id": "log-backend", "name": "Log Backend", "deps": [] },
        { "id": "secrets", "name": "Secrets Management", "deps": [] }
      ]
    }
  ]
}
```

---

## Tips

* Keep **names** user‑friendly; keep **ids** short and consistent.
* If an item feels too broad, introduce a new category rather than bloating `deps`.
* If you’re unsure about `logo`, omit it; you can add paths later.
