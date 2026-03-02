import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // 核心配置：部署到 Zeabur 根域名时设为 '/'，若部署到子目录则改为 '/子目录名/'
  base: '/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // 可选：构建优化，确保输出目录为 dist（Zeabur 默认识别的目录）
  build: {
    outDir: 'dist', // 必须为 dist，和 Zeabur 输出目录对应
    assetsDir: 'assets', // 静态资源目录，默认即可
    sourcemap: false // 生产环境关闭 sourcemap，减小打包体积
  },
  // 可选：开发环境配置，不影响部署
  server: {
    port: 3000,
    open: true
  }
})