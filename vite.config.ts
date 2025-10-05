import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

// https://vite.dev/config/
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
      '@routes': resolve(__dirname, './src/app/routes'),
      '@services': resolve(__dirname, './src/app/services'),
      '@styles': resolve(__dirname, './src/app/styles'),
      '@utils': resolve(__dirname, './src/app/utils'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  build: {
    outDir: 'dist/web',
    rollupOptions: {
      input: {
        main: 'index.html', // Explicitly set index.html as the only entry point
      },
    },
  },
});
