import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { themePreprocessorPlugin } from '@zougt/vite-plugin-theme-preprocessor/dist'

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
            scopeName: 'theme-light',
            path: resolve('src/assets/style/theme-light.less')
          },
          {
            scopeName: 'theme-dark',
            path: resolve('src/assets/style/theme-dark.less')
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
