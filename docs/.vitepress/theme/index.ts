import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import 'virtual:group-icons.css'
// import Layout from './Layout.vue'

import BackToTopButton from '@belikellwyd/vitepress-back-to-top-button'
import '@belikellwyd/vitepress-back-to-top-button/style.css'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    BackToTopButton(ctx.app)
  }
}
