#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const BUILD_FILE = path.join(__dirname, 'build.json');
const DIST_BUILD_FILE = path.join(__dirname, 'dist', 'blockscape-viewer', 'build.json');
const MAIN_JS = path.join(__dirname, 'dist', 'blockscape-viewer', 'main.js');

function readBuild() {
  try {
    const data = fs.readFileSync(BUILD_FILE, 'utf8');
    const parsed = JSON.parse(data);
    if (Number.isInteger(parsed.build)) return parsed;
  } catch (err) {
    // ignore, will initialize
  }
  return { build: 0, updatedAt: null };
}

function writeJSON(file, obj) {
  fs.writeFileSync(file, JSON.stringify(obj, null, 2) + '\n', 'utf8');
}

function updateMain(build) {
  const src = fs.readFileSync(MAIN_JS, 'utf8');
  const next = src.replace(/const BUILD_NUMBER = \"[^\"]*\";/, `const BUILD_NUMBER = "${build}";`);
  if (next === src) {
    throw new Error('BUILD_NUMBER placeholder not found in main.js');
  }
  fs.writeFileSync(MAIN_JS, next, 'utf8');
}

function main() {
  const current = readBuild();
  const nextBuild = current.build + 1;
  const updatedAt = new Date().toISOString();
  const payload = { build: nextBuild, updatedAt };

  writeJSON(BUILD_FILE, payload);
  writeJSON(DIST_BUILD_FILE, payload);
  updateMain(nextBuild);

  console.log(`Blockscape Obsidian build #${nextBuild} (${updatedAt})`);
}

main();
