// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/a11y',
    '@nuxt/eslint',
    '@nuxt/hints',
    '@nuxt/ui'
  ],

  // 全局样式：暗色科技感主题
  css: ['~/assets/css/main.css'],

  // 强制暗色模式
  colorMode: {
    preference: 'dark',
    fallback: 'dark'
  },

  // Nuxt UI 主题配置
  ui: {
    colors: {
      primary: 'cyan',
      neutral: 'slate'
    }
  },

  app: {
    head: {
      title: 'Noct - 个人介绍',
      htmlAttrs: {
        lang: 'zh-CN',
        class: 'dark'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Noct 的个人介绍页 - 全栈开发工程师 / 开源爱好者' },
        { name: 'theme-color', content: '#070b14' }
      ]
    }
  }
})
