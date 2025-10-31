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
  },
})
