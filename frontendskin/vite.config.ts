import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || "/Renora-SkinCare-Frontend",
  server: {
    proxy: {
      // Change '/api' to the path you want to proxy
      '/api': {
        target: 'http://localhost:3001/api', // Change this to your backend server's URL
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
