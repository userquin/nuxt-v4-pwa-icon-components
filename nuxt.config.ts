// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  typescript: {
    tsConfig: {
      compilerOptions: {
        allowArbitraryExtensions: true,
        allowImportingTsExtensions: true,
        // traceResolution: true,
      },
    },
  },
  devtools: { enabled: true },
  modules: ['@vite-pwa/nuxt'/*, '@nuxt/ui'*/],
  routeRules: {
    '/': { prerender: true },
  },
  pwa: {
    mode: 'development',
    strategies: 'generateSW',
    registerType: 'autoUpdate',
    manifest: {
      name: 'Nuxt Vite PWA',
      short_name: 'NuxtVitePWA',
      theme_color: '#ffffff',
    },
    pwaAssets: {
      config: true,
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    client: {
      installPrompt: true,
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallback: '/',
      navigateFallbackAllowlist: [/^\/$/],
    },
  },
})
