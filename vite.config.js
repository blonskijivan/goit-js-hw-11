import { defineConfig } from 'vite';

export default defineConfig({
  base: '/goit-js-hw-11/',   // щоб GitHub Pages правильно віддавав
  root: 'src',               // корінь для Vite — це src
  build: {
    outDir: '../dist',       // збірка йде у кореневий dist
    emptyOutDir: true
  }
});