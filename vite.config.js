import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { ifError } from 'assert';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'src': path.resolve(__dirname, './src'),
    },
  },
});