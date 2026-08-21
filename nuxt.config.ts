export default defineNuxtConfig({
  modules: ['@nuxtjs/sitemap', '@nuxtjs/robots'],

  // domain chính
  site: {
    url: 'https://hoanglinhdvkdns.com',
    name: 'Công ty dịch vụ nông sản Hoàng Linh',
  },

  // cấu hình sitemap
  sitemap: {
    sources: [
      // create our own API endpoints
      '/api/__sitemap__/urls',
      // use a static remote file
      'https://cdn.example.com/my-urls.json',
      // hit a remote API with credentials
      ['https://api.example.com/pages/urls', { headers: { Authorization: 'Bearer <token>' } }]
    ]
  },


  robots: {
    blockNonSeoBots: true,
    blockAiBots: true,

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