/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client" />
/// <reference types="vite-plugin-vue-layouts/client"/>

interface ImportMetaEnv {
  VITE_APP_API: string;
  VITE_APP_SECRET: string;
  VITE_MOCK_URL: string
}
