import { fileURLToPath, URL } from 'node:url'
import path from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name].[hash].js',
        assetFileNames: chunkInfo => {
          let subDir = 'images'
          if (path.extname(chunkInfo.name) === '.css') {
            subDir = 'css'
          }
          return `assets/${subDir}/[name].[hash].[ext]`
        },
      }
    } 
  },
  server: {
    port: 8080,
    open: true
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
