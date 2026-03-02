import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  // 关键配置：如果你的仓库名是 VUE-PROJECT-2026，则 base 设为 '/VUE-PROJECT-2026/'
  base: '/vue-Project-2026/',
  plugins: [vue()],
  // 可选：确保构建输出目录为 dist（默认就是 dist，可省略）
  build: {
    outDir: 'dist'
  }
})