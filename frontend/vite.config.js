import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // ✅ Build folder
  },
  server: {
    host: '0.0.0.0', // ✅ Publicly accessible for Render
    port: 10000      // ✅ Match with Render start command
  }
})
