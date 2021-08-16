import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import viteCompression from 'vite-plugin-compression';
// import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
// pwa配置，如果需要pwa，就把这个配置加入到plugins中
/**
 * VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: "纸贵科技",
        short_name: "纸贵科技",
        display: "standalone",
        icons: [
          { src: "/logo*512.png", type: "image/png", sizes: "512x512" },
          { src: "/logo*256.png", type: "image/png", sizes: "256x256" },
          { src: "/logo*128.png", type: "image/png", sizes: "128x128" },
          { src: "/logo*64.png", type: "image/png", sizes: "64x64" },
        ],
        start_url: "/",
        background_color: "#F9F9F9",
        theme_color: "#3A3F51",
      },
      workbox: {},
    }),
 */
export default defineConfig({
  server: {
    open: true,
  },
  alias: {
    '@': path.resolve(__dirname, 'src'),
    pages: path.resolve(__dirname, 'src/pages'),
    assets: path.resolve(__dirname, 'src/assets'),
    store: path.resolve(__dirname, 'src/store'),
    '@types': path.resolve(__dirname, 'src/@types'),
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/styles/app.scss";',
      },
    },
  },
  build: {
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  plugins: [
    viteCompression({
      verbose: true,
      algorithm: 'gzip',
      threshold: 10240,
    }),
    vue(),
  ],
});
