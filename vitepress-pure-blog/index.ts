import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import PureBlogLayout from './components/PureBlogLayout.vue'

export * from './types'

// 极简风格主题，继承于 vitepress 默认主题，仅扩展 blog 必须的功能，如分页、评论等
export default {
  extends: DefaultTheme,
  Layout: PureBlogLayout,
  enhanceApp({ app, router, siteData }) {}
} satisfies Theme
