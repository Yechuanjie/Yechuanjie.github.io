import { defineConfigWithTheme } from 'vitepress'
import { type ThemeConfig } from '@ycj/vitepress-pure-blog'
import baseConfig from '@ycj/vitepress-pure-blog/config'

console.info('baseConfig', baseConfig)
export default defineConfigWithTheme<ThemeConfig>({
  // 继承自定义主题默认配置，如有需要可自行覆盖配置
  extends: baseConfig,
  // 自定义主题特有的配置
  themeConfig: {}
})
