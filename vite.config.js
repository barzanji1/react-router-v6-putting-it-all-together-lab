import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Updated for react router v6 lab
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/__tests__/setup.js',
  }
})
