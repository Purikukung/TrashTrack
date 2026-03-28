import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/postcss' // เพิ่มบรรทัดนี้

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // เพิ่มบรรทัดนี้
  ],
  build: {
    outDir: 'dist', // มั่นใจว่าไฟล์จะไปอยู่ที่ dist
  }
})