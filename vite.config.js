import { defineConfig } from 'vite';

export default defineConfig({
  base: '/goit-js-hw-11/',
  root: 'src',
  build: { outDir: '../dist', emptyOutDir: true },
  define: {
    global: 'window',
    'process.env': {},   // на випадок, якщо щось читає process.env
  },
});