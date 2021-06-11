import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import viteCompression from "vite-plugin-compression";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
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
      algorithm: "gzip",
      threshold: 10240,
    }),
    VitePWA({
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
    vue(),
  ],
});
