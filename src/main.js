import Vue from 'vue'
import VueCompositionAPI, { createApp } from '@vue/composition-api'
import { createI18n } from 'vue-i18n-composable'
import App from './App.vue'

Vue.use(VueCompositionAPI)

const i18n = createI18n({
  locale: 'ja',
  messages: {
    en: {
      language: 'English',
    },
    ja: {
      language: '日本語',
    },
  },
})

const app = createApp({
  render: h => h(App),
  i18n,
})

app.mount('#app')
