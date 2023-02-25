import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  if (command === 'serve') {
    // dev specific config
    return {
      plugins: [react()],
      server: {
        proxy: {
          '/api/v1': {
            target: 'http://localhost:8000',
            // changeOrigin: true,
            // secure: false,
            // ws: true,
          },
        },
      },
    }
  } else {
    // build specific config
    return {
      plugins: [react()],
    }
  }
})
