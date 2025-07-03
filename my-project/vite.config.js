import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  build: {
    outDir: 'dist'
  },
  // Add this for proper client-side routing:
  base: '/',
})
