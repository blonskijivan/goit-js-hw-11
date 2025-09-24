import { defineConfig } from 'vite';

export default defineConfig({
  base: '/goit-js-hw-11/',   // для GitHub Pages
  root: 'src',               // index.html всередині src
  build: { outDir: '../dist', emptyOutDir: true }
});