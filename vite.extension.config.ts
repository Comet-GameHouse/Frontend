import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';
import copy from 'rollup-plugin-copy';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@app': resolve(__dirname, './src/app'),
      '@assets': resolve(__dirname, './src/app/assets'),
      '@components': resolve(__dirname, './src/app/components'),
      '@constants': resolve(__dirname, './src/app/constants'),
      '@contexts': resolve(__dirname, './src/app/contexts'),
      '@hooks': resolve(__dirname, './src/app/hooks'),
      '@layouts': resolve(__dirname, './src/app/layouts'),
      '@pages': resolve(__dirname, './src/app/pages'),
      '@styles': resolve(__dirname, './src/app/styles'),
      '@utils': resolve(__dirname, './src/app/utils'),
    },
  },
  build: {
    outDir: 'dist/extension',
    rollupOptions: {
      plugins: [
        copy({
          targets: [
            {
              src: 'platforms/extension/*',
              dest: 'dist/extension',
            },
          ],
          hook: 'writeBundle',
        }),
      ],
      input: {
        sidepanel: resolve(__dirname, 'index.html'),
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: 'chunks/[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
});
