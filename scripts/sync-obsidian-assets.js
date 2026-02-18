import { cp, mkdir, stat } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");
const SRC = path.join(ROOT, "documentation/docs/site_assets/blockscape");
const DEST = path.join(ROOT, "blockscape-obsidian/dist/blockscape-viewer/assets");
const FILES = ["blockscape.js", "blockscape.css", "mount.js"];

async function main() {
  await stat(SRC).catch(() => {
    throw new Error(
      `Build output missing at ${SRC}. Run \"npm run export\" or \"npm run build\" first.`
    );
  });

  await mkdir(DEST, { recursive: true });

  for (const file of FILES) {
    const from = path.join(SRC, file);
    const to = path.join(DEST, file);
    await cp(from, to, { force: true });
  }

  console.log(
    `[obsidian-sync] copied ${FILES.length} assets to blockscape-obsidian/dist/blockscape-viewer/assets`
  );
}

main().catch((err) => {
  console.error(`[obsidian-sync] ${err.message}`);
  process.exit(1);
});
