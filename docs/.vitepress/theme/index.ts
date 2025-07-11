import DefaultTheme from 'vitepress/theme'
import { Theme, useData } from 'vitepress'
import 'virtual:uno.css'
import './custom.scss'

import Layout from './components/Layout.vue'
import Home from './components/Home.vue'
import Posts from './components/Posts.vue'

export default {
  extends: DefaultTheme,
  Layout: Layout,
  enhanceApp({ app }) {
    app.component('Home', Home)
    app.component('Posts', Posts)
  }
} satisfies Theme
