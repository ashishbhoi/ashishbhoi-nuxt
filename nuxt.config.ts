// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/turnstile'],

  turnstile: {
    siteKey: '0x4AAAAAAACwG4kjB4kyNBmu',
  },

  runtimeConfig: {
    turnstile: {
      secretKey: process.env.NUXT_TURNSTILE_SECRET_KEY || '',
    },
  },

})
