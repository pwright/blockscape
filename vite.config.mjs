import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  root: 'svelte',
  plugins: [svelte()],
  build: {
    outDir: '../docs',
    emptyOutDir: true
  },
  server: {
    port: 5173
  }
});
