import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Chỉ định base URL cho ứng dụng
  build: {
    outDir: 'dist' // Đảm bảo thư mục đầu ra khớp với vercel.json
  }
})
