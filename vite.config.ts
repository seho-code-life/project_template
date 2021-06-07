import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
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
      workbox: {
        skipWaiting: true,
        clientsClaim: true,
      },
    }),
  ],
});
