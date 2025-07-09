import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import 'virtual:uno.css'
import './custom.scss'

import Layout from './components/layout.vue'
import HomeDesc from './components/home-desc.vue'

export default {
  extends: DefaultTheme,
  Layout: Layout,
  enhanceApp({ app }) {
    app.component('home-desc', HomeDesc)
  }
} satisfies Theme
