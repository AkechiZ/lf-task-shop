import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import * as path from 'path';

export default defineConfig({
  plugins: [
      react(),
  ],
  base: '/lf-task-shop/',
  build: {
    sourcemap: false,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  test: {
    css: false,
    include: ['__test__/*.{test,spec}.?(c|m)[jt]s?(x)'] ,
    globals: true,
    environment: 'jsdom',
    clearMocks: true,
  },
});
