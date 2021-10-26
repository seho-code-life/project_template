import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'
import ViteComponents from 'unplugin-vue-components/vite'
import WindiCSS from 'vite-plugin-windicss'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'
import styleImport from 'vite-plugin-style-import'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
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
      scss: {
        additionalData: '@import "~/assets/styles/app.scss";'
      }
    }
  },
  build: {
    target: 'es2015',
    rollupOptions: {
      output: {
        // 配置额外的入口
        manualChunks: {
          antdv: ['ant-design-vue']
        }
      }
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  plugins: [
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
      libs: [
        {
          libraryName: 'ant-design-vue',
          esModule: true,
          resolveStyle: (name) => {
            return `ant-design-vue/es/${name}/style/index`
          }
        }
      ]
    }),
    ViteComponents({
      resolvers: [AntDesignVueResolver()],
      dts: 'src/components.d.ts'
    }),
    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/core', 'pinia'],
      dts: 'src/auto-imports.d.ts'
    }),
    vue(),
    Pages({
      exclude: ['**/components/*.vue'],
      importMode(path) {
        return 'async'
      }
    }),
    Layouts(),
    viteMockServe({
      localEnabled: true
    }),
    vueJsx()
  ]
})
