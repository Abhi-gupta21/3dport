import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Abhi-gupta21.github.io/', // Use your repository name here
  root: 'threedport',
  build: {
    rollupOptions: {
      output: {
        // Configure manual chunks to reduce the size of the main chunk
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Create a separate chunk for vendor libraries
          }
        }
      }
    },
    chunkSizeWarningLimit: 600, // Increase warning limit for chunk sizes
  },
});
