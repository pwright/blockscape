#!/bin/bash
# Deploy quartz-blockscape plugin to skupper-okf Quartz site

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BLOCKSCAPE_ROOT="$(dirname "$SCRIPT_DIR")"
QUARTZ_PLUGIN_DIR="$BLOCKSCAPE_ROOT/quartz-blockscape"
SKUPPER_OKF_DIR="${SKUPPER_OKF_DIR:-$HOME/repos/sk/skupper-okf/quartz}"

echo "==> Checking if full.css needs token updates..."
if [ -f "$SKUPPER_OKF_DIR/dist/full.css" ]; then
  # Patch the existing full.css with updated token values
  # This avoids the Rollup build error while updating the CSS
  echo "  Patching existing full.css with token updates..."
  cd "$SKUPPER_OKF_DIR/dist"

  # Update tile padding from space-xs to space-md
  sed -i 's/--blockscape-tile-padding-top: var(--space-xs)/--blockscape-tile-padding-top: var(--space-md)/g' full.css

  # Update logo offset from -25px to -15px (pushes logo down from top)
  sed -i 's/--blockscape-logo-offset: -25px/--blockscape-logo-offset: -15px/g' full.css

  # Update name offset from -45px to -30px (moves text down)
  sed -i 's/--blockscape-name-offset: -45px/--blockscape-name-offset: -30px/g' full.css
  # Also update if it's already -35px from a previous patch
  sed -i 's/--blockscape-name-offset: -35px/--blockscape-name-offset: -30px/g' full.css

  echo "  ✓ Patched full.css with updated tokens and offsets"
else
  echo "  ⚠ full.css not found - run initial build first"
fi

echo "==> Copying updated quartz-blockscape client files..."
cd "$BLOCKSCAPE_ROOT"

# Build tokens to ensure they're up to date
npm run build:tokens

cd "$QUARTZ_PLUGIN_DIR"

# Just build the client bundle (tsup works fine)
npm run clean
npx tsup
cp dist.README.md dist/README.md || true

# Copy only the client files (not full bundle to avoid overwriting our patch)
echo "==> Copying client files to $SKUPPER_OKF_DIR/dist..."
if [ ! -d "$SKUPPER_OKF_DIR" ]; then
  echo "ERROR: Quartz directory not found: $SKUPPER_OKF_DIR"
  echo "Set SKUPPER_OKF_DIR environment variable to the correct path"
  exit 1
fi

mkdir -p "$SKUPPER_OKF_DIR/dist"
cp -v dist/index.js "$SKUPPER_OKF_DIR/dist/"
cp -v dist/index.d.ts "$SKUPPER_OKF_DIR/dist/"
cp -v dist/client.global.js "$SKUPPER_OKF_DIR/dist/"
cp -v dist/client.css "$SKUPPER_OKF_DIR/dist/"
cp -v dist/README.md "$SKUPPER_OKF_DIR/dist/" 2>/dev/null || true

echo "==> Plugin deployed successfully!"

# Optional: Rebuild Quartz site
if [ "$1" = "--rebuild" ]; then
  echo "==> Rebuilding Quartz site..."
  cd "$SKUPPER_OKF_DIR"
  npx quartz build
  echo "==> Quartz site rebuilt!"
fi

echo ""
echo "✓ Done! Plugin files updated in: $SKUPPER_OKF_DIR/dist/"
echo ""
echo "Files deployed:"
echo "  - index.js, index.d.ts (transformer plugin)"
echo "  - client.global.js, client.css (lite renderer)"
echo "  - full.css (patched in-place with token updates)"
echo ""
echo "Note: full.global.js is not rebuilt to avoid Rollup issues"
echo "      CSS tokens are patched directly in full.css"
echo ""
echo "Next steps:"
echo "  1. cd $SKUPPER_OKF_DIR"
echo "  2. npx quartz build"
echo "  3. Restart quartz serve (if running)"
echo ""
echo "Or run: $0 --rebuild (to auto-rebuild)"
