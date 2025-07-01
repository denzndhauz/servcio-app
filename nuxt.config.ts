// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    public: {
      authBaseURL: 'https://api.example.com',
      // or use apiBase for general API calls
      apiBase: 'https://api.example.com'
    }
  }
})
