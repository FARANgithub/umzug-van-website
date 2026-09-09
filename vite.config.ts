import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Wichtig: base muss dem Repo-Namen entsprechen, damit GitHub Pages
// die Assets unter https://<user>.github.io/umzug-van-website/ korrekt findet.
export default defineConfig({
  plugins: [react()],
base: '/',
})
