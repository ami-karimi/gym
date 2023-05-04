// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    css: [
        {src:"@/assets/main.css",lang: 'css'},
        {src:"@/assets/style.css",lang: 'css'},
    ],
    modules: [
        '@pinia/nuxt',
        '@nuxtjs/tailwindcss'
    ],
    build: {
        extractCSS: true,
        transpile: ['vue-toastification'],
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    runtimeConfig: {
        SecretToken: '',
        AppMode: 'debug',
        public: {
            apiBase: 'http://81.12.39.117:2000/',
            baseUrl: 'http://81.12.39.117:2000/',
        }
    },
})
