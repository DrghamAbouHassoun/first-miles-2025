import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  base: '/first-miles-2025/',
  build: {
    chunkSizeWarningLimit: 1200,
  },
  plugins: [
    svgr(),
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
