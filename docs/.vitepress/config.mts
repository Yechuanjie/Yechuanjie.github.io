import { defineConfig } from 'vitepress'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: 'Yechuanjie',
  description: '',
  srcDir: 'src',
  cleanUrls: true,
  appearance: 'dark',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: '/posts' },
      { text: '归档', link: '/archives' },
      { text: '关于', link: '/about' }
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/Yechuanjie' }],

    footer: {
      copyright: 'Copyright © 2025-present <a href="https://github.com/Yechuanjie">Yechuanjie</a>'
    },

    search: {
      provider: 'local'
    },

    // 文章翻页
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    darkModeSwitchLabel: '外观',
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '菜单'
  },
  vite: {
    plugins: [
      AutoImport({
        imports: ['vue'],
        dts: './types/auto-imports.d.ts',
        resolvers: [ArcoResolver()]
      }),
      Components({
        dirs: './theme/components',
        resolvers: [
          ArcoResolver({
            sideEffect: true
          })
        ],
        dts: './types/component.d.ts',
        directoryAsNamespace: true
      }),
      UnoCSS()
    ]
  }
})
