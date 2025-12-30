import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      buffer: 'buffer',  // polyfill Buffer
    },
  },
  define: {
    'process.env': {}, // avoids process undefined errors
    'global': 'globalThis', // Ensure global is available
  },
  optimizeDeps: {
    include: ['buffer'], // Pre-bundle buffer polyfill
    esbuildOptions: {
      target: 'es2020', // Support BigInt in dependencies
    },
  },
  build: {
    minify: 'esbuild', // Use esbuild for faster minification (default, but explicit)
    target: 'es2020', // Target ES2020 to support BigInt (required for Solana)
    cssCodeSplit: true, // Split CSS for better caching
    assetsInlineLimit: 4096, // Inline small assets (< 4KB) to reduce requests
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Separate vendor chunks for better caching and code splitting
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'react-vendor';
            }
            if (id.includes('@solana')) {
              return 'solana-vendor';
            }
            if (id.includes('lucide-react')) {
              return 'lucide-vendor';
            }
            if (id.includes('@fortawesome')) {
              return 'fontawesome-vendor';
            }
            // Other node_modules go into a separate vendor chunk
            return 'vendor';
          }
        },
        // Ensure chunk filenames are predictable for better caching
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    // Optimize chunk size warnings
    chunkSizeWarningLimit: 1000,
    // Enable source maps for better debugging (disable in production for smaller bundles)
    sourcemap: false,
  },
})
