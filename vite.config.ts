import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import viteCompression from 'vite-plugin-compression'
import WindiCSS from 'vite-plugin-windicss'
import legacy from '@vitejs/plugin-legacy'
import styleImport, { AntdResolve } from 'vite-plugin-style-import'
import Pages from 'vite-plugin-pages'
import { viteMockServe } from 'vite-plugin-mock'

export default defineConfig({
  server: {
    port: 8990,
    host: '0.0.0.0',
    open: true
  },
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
      '@assets': path.resolve(__dirname, 'src/assets')
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  build: {
    target: 'es2015',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  plugins: [
    react(),
    WindiCSS(),
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    viteCompression({
      verbose: true,
      algorithm: 'gzip',
      threshold: 10240
    }),
    styleImport({
      resolves: [AntdResolve()]
    }),
    Pages({
      exclude: ['**/components/*.vue'],
      importMode: 'async'
    }),
    viteMockServe({
      localEnabled: true
    })
  ]
})
