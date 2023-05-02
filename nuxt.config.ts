// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/turnstile',
        '@nuxtjs/tailwindcss'
    ],
    turnstile: {
        siteKey: process.env.NUXT_PUBLIC_TURNSTILE_SITE_KEY
    },
})
