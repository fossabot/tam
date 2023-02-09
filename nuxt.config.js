/*
 1 - inset data this object
 2 - Export Image To /image.png And Icon For Mobile App /icon-app.png
 3 - Licince
*/
const dataApp = {
  title : "nnapp | Dev Your Project",
  name_app : "nnapp",
  description : "Dev Your Project Esye",
  url : {
    site : "https://xxx.xxx",
    start_url : "/index"
  },
  theme_image : "https://xxx.xxx/image.png",
  color : {
    main : "#000000",
    top_bar : "#000000",
    background : "#ffffff"
  }
}
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: dataApp.title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: dataApp.description },
      { name: 'format-detection', content: 'telephone=no' },
      {name: "og:type" , content : "website"},
      {name: "og:title" , content : dataApp.title},
      {name: "og:description" , content : dataApp.description},
      {name: "og:url" , content : dataApp.url.site},
      {name: "og:image" , content : dataApp.theme_image},
      {name: "og:type" , content : "website"},
      {name: "og:site_name" , content : dataApp.name_app},
      {name: "twitter:card" , content : "summary_large_image"},
      {name: "twitter:title" , content : dataApp.title},
      {name: "twitter:description" , content : dataApp.description},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Alexandria:wght@300;400;500;700;900&display=swap' }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/style/global.scss",
    "remixicon/fonts/remixicon.css",
    "bootstrap/dist/css/bootstrap-grid.min.css",
    "aos/dist/aos.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/universal-storage'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    icon: {
      fileName : "icon-app.png"
    },
    meta: {
      mobileAppIOS : true,
      theme_color : dataApp.color.top_bar
    },
    manifest: {
      name : dataApp.name_app,
      lang: 'ar',
      short_name : dataApp.name_app,
      background_color : dataApp.color.background,
      start_url: dataApp.url.start_url,
      dir : "rtl"
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    terser: {
      extractComments: false,
      terserOptions: {
        output: {
          comments: /^\**!|@preserve|@license|@cc_on|license|Copyright|LICENSE|copyright|^\*!/gim
        }
      }
    }
  },
  generate: {
    fallback: '404.html'
  },
  loadingIndicator: {
    name: 'rectangle-bounce',
    color : dataApp.color.main
   },
   loading: {
    color: dataApp.color.main,
    height: '5px'
  },
}
