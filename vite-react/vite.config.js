import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Abhi-gupta21.github.io/', // Use your repository name here
  root: 'threedport',
})
