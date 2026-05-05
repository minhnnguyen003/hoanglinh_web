export default defineNuxtConfig({
  modules: ['@nuxtjs/sitemap', '@nuxtjs/robots'],

  // domain chính
  sitemap: {
    siteUrl: 'https://hoanglinhdvkdns.com'
  },

  // giữ nguyên config của bạn
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/variables.scss" as *;'
        }
      }
    }
  }
})