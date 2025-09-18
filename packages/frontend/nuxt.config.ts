// https://nuxt.com/docs/api/configuration/nuxt-config
// https://tauri.app/start/frontend/nuxt/#update-nuxt-configuration
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  css: ['~/assets/css/main.css'],
  devServer: { host: process.env.TAURI_DEV_HOST || 'localhost' },
  devtools: { enabled: true },
  modules: [
    '@nuxt/test-utils',
    '@nuxt/ui',
  ],
  ssr: false,
  vite: {
    // Better support for Tauri CLI output
    clearScreen: false,
    // Enable environment variables
    // Additional environment variables can be found at
    // https://v2.tauri.app/reference/environment-variables/
    envPrefix: ['VITE_', 'TAURI_'],
    server: {
      // Tauri requires a consistent port
      strictPort: true,
    },
  },
  ui: {
    fonts: false,
  },
})
