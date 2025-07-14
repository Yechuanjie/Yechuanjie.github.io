import type { Theme } from 'vitepress'
import PureBolgTheme from '@ycj/vitepress-pure-blog'

export default {
  extends: PureBolgTheme,
  enhanceApp({ app, router, siteData }) {}
} satisfies Theme
