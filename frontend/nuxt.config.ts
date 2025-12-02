// frontend/nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      apiBase: import.meta.env.NUXT_PUBLIC_API_BASE ?? "http://backend:4000",
    },
  },
});
