import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { themePreprocessorPlugin } from '@zougt/vite-plugin-theme-preprocessor'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  plugins: [
    react(),
    themePreprocessorPlugin({
      less: {
        multipleScopeVars: [
          {
            scopeName: 'theme-dark',
            path: resolve('src/assets/style/theme-dark.less')
          },
          {
            scopeName: 'theme-light',
            path: resolve('src/assets/style/theme-light.less')
          }
        ]
      }
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
})
