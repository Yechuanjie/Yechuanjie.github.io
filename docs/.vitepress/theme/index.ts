import DefaultTheme from 'vitepress/theme'
import { inBrowser, Theme, useData } from 'vitepress'
import 'virtual:uno.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './scss/custom.scss'

import Layout from './components/Layout.vue'
import Home from './components/Home.vue'
import Posts from './components/Posts.vue'
// import ArticleHeader from './components/ArticleHeader.vue'

export default {
  extends: DefaultTheme,
  Layout: Layout,
  enhanceApp({ app, router, siteData }) {
    app.component('Home', Home)
    app.component('Posts', Posts)
    // app.component('ArticleHeader', ArticleHeader)
  }
} satisfies Theme
