export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'gestion_du_drive',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    //'~/assets/style.css'
  ],
  css: [
    //'~/assets/inscript.css'
  ],


  // js
  js: [
    '~/stactic/main.js'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '~/plugins/axios.js'

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/proxy',
    ['@nuxtjs/proxy', { pathRewrite: { '^/api/' : '' } }]
    
  ],

  auth: {
    redirect: {
      login: "/login",
      logout: "/login",
    },
    strategies: {
      local: false,
      cookie: {
        token: {
          property: "data.access_token",
          required: true,
          type: "Bearer",
        },
        user: {
          property: "data",
        },
        endpoints: {
          login: {
            url: "v1/auth/login",
            method: "post",
          },
          logout: { url: "/v1/auth/logout", method: "delete" },
          user: { url: "/v1/settings", method: "get" },
        },
      },
    },
  },
  // auth: {
  //   strategies: {
      
  //     local: {
  //       endpoints: {
  //         login: {
  //           url: '/auth/login',
  //           method: 'post',
  //           propertyName: false
  //         },
  //         logout: { 
  //           logout: false, //nous n'avons pas de point de terminaison pour notre déconnexion dans notre API et nous supprimons simplement le jeton du stockage local
  //         },
  //         user: { 
  //           url: '/auth/profile', 
  //           method: 'get', 
  //           propertyName: false 
  //         }
  //       },
  //       tokenRequired: false,
  //       tokenType: false
  //     }
  //   }
  // },
    /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
   axios: {
    proxy: true
   },
   proxy: [
    'http://192.168.100.78:8000/api/' 
   ],
    //'/test/': { target: 'http://192.168.100.78:8000', pathRewrite: {'^/test/': '/'}, changeOrigin: true }
  //},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
        /*
     ** You can extend webpack config here
     */
     extend(config, ctx) { }
  },
}
