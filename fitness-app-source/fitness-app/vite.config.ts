import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  // VITE_BASE is injected by the GitHub Actions workflow.
  // Locally it defaults to '/' so `pnpm dev` always works.
  base: process.env.VITE_BASE ?? '/',
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
})
