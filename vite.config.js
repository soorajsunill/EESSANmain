import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['./path/to/bootstrap/dist/css/bootstrap.min.css'],
      external: ['bootstrap']
    }
  }
});

