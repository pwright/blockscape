# Blockscape Toon Prompt Template (indent + dash format)

Use this prompt to generate a Blockscape landscape in the lightweight “toon” outline used by the static viewer. Copy, paste, and replace the bracketed placeholders.

---

## Prompt (fill in the brackets)

Generate a **Blockscape value‑chain toon document** for the domain of **[DOMAIN NAME]**.

### Requirements

* Output **toon only** (no commentary). Toon is an indented outline, similar to YAML:
  * `key: value` for scalars (`null`, `true/false`, numbers, or quoted strings).
  * Arrays use leading dashes (`- item`); nested objects are indented under the dash.
  * Objects block: put nested keys on the next lines indented two spaces.
  * You may use inline arrays like `deps: [a, b]` when short.
  * Do **not** emit JSON or markdown fences.
* Structure to follow:

```
id: [model-id]
title: [Model Title]
abstract: "[Short description or HTML snippet]"
categories:
  - id: [category-id]
    title: [Category Title]
    items:
      - id: [item-id]
        name: [Item Name]
        deps: [id, id]
```

* Model rules:
  * 3–5 categories; each has 2–5 items.
  * Category `id`/`title` required.
  * Item fields: `id`, `name`, optional `logo`, optional `external` (URL), optional `color` (hex), `deps` array (can be empty).
  * Keep `id`s short, lowercase, hyphen/underscore ok; ASCII only.
  * Dependencies must reference existing item ids.
* Order categories from **user‑visible** to **enabling** layers; `deps` flow downward to enablers.

### Domain Guidance

In **[one paragraph]**, summarize the domain’s user‑visible goals and key enablers. Use it to choose categories and dependencies.

### Output

Return **only the toon** following the structure above, no extra prose or code fences.

### Validation Checklist (self‑check before returning)

* `id`, `title`, and `abstract` present and non‑empty.
* 3–5 categories; 2–5 items each.
* No duplicate `id`s across items; all `deps` resolve.
* No extra fields beyond the schema.
* Toon is well‑indented; arrays use dashes; quoted strings closed.

---

## One‑shot Example (Machine Learning Model Deployment)

Generate a **Blockscape value‑chain toon document** for **machine learning model deployment**.

```
id: ml-deployment
title: Machine Learning Model Deployment
abstract: "User-facing predictions via APIs and UI, supported by model and data ops with secure, observable infrastructure."
categories:
  - id: experience
    title: User Experience
    items:
      - id: prediction-api
        name: Prediction API
        deps: [model-serving, authz]
      - id: batch-scoring
        name: Batch Scoring
        deps: [feature-store, orchestration]
      - id: ui-console
        name: Ops Console
        deps: [monitoring, logging]
  - id: models
    title: Models & Data
    items:
      - id: model-serving
        name: Model Serving
        deps: [container-runtime, autoscaling]
      - id: model-registry
        name: Model Registry
        deps: [artifact-store]
      - id: feature-store
        name: Feature Store
        deps: [data-pipelines]
  - id: platform
    title: Platform Services
    items:
      - id: monitoring
        name: Monitoring
        deps: [metrics-backend]
      - id: logging
        name: Logging
        deps: [log-backend]
      - id: authz
        name: AuthN/Z
        deps: [secrets]
      - id: orchestration
        name: Orchestration
        deps: [container-runtime]
  - id: infrastructure
    title: Infrastructure
    items:
      - id: autoscaling
        name: Autoscaling
        deps: [metrics-backend]
      - id: container-runtime
        name: Container Runtime
        deps: []
      - id: artifact-store
        name: Artifact Store
        deps: []
      - id: data-pipelines
        name: Data Pipelines
        deps: []
      - id: metrics-backend
        name: Metrics Backend
        deps: []
      - id: log-backend
        name: Log Backend
        deps: []
      - id: secrets
        name: Secrets Management
        deps: []
```
