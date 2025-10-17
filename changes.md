# Changes

1. Replaced the bespoke CSS with a self-contained PatternFly-inspired design system, defining typography, spacing, and color tokens locally to avoid external dependencies.
2. Rebuilt the application shell with a masthead-style toolbar, branded heading, and accessible controls while preserving the existing control IDs.
3. Restyled all inputs, selects, and buttons using the new token set so toolbar actions share consistent sizing, focus states, and hover affordances.
4. Polished the JSON editor drawer with panel framing, monospace textarea styling, and responsive action buttons.
5. Updated tile grid, badges, and legend visuals to use the shared design tokens, adding depth, hover, and drag feedback aligned with the refreshed theme.
6. Mapped dependency link strokes and abstract callout styling to the new token palette so relationship lines render again.
7. Replaced the model dropdown with a left-rail navigator that lists each model, highlights the active selection, and keeps the removal/clear actions nearby.
