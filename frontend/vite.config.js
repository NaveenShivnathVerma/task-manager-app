import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Final config for Render hosting
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  preview: {
    port: 10000,
    host: true,
    allowedHosts: ['task-manager-app-ui.onrender.com'], // ✅ Allow Render host
  },
})
