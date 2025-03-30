import tailwindcss from '@tailwindcss/vite'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
    TanStackRouterVite({ target: 'react', autoCodeSplitting: true })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})
