// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // @ts-ignore "DON'T KNOW HOW TO FIX"
    app:{
      head: {
          charset: 'utf-8',
          htmlAttrs: {
              lang: 'en-US'
          },
          meta: [
              {name: "mobile-web-app-capable", content: "yes"}
          ]
      }
    },
    modules: [
        '@nuxtjs/turnstile',
        '@nuxtjs/tailwindcss'
    ],
    turnstile: {
        siteKey: process.env.NUXT_PUBLIC_TURNSTILE_SITE_KEY
    },
})
