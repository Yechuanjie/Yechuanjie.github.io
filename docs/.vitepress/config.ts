import { defineConfig } from 'vitepress'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'
import { generateSidebar } from 'vitepress-sidebar'
import { SidebarItem } from 'vitepress-sidebar/types'
import { pagefindPlugin } from 'vitepress-plugin-pagefind'
import { markdown } from './utils/markdown'

const autoSidebar = () => {
  let result = generateSidebar({
    documentRootPath: '/docs/posts',
    collapseDepth: 3,
    useTitleFromFrontmatter: true,
    sortMenusByFrontmatterDate: true,
    sortMenusOrderByDescending: true
  }) as SidebarItem[]
  return result.map((year) => {
    // 添加posts前缀
    year.items?.forEach((i) => {
      i.link = `/posts${i.link}`
    })
    return {
      ...year,
      text: `${year.text}（${year.items?.length}篇） `,
      items: year.items?.reverse()
    }
  })
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Lito',
  description: '',
  lang: 'zh-CN',
  head: [['link', { rel: 'icon', href: '/green_book.png' }]],
  cleanUrls: true,
  appearance: 'dark',

  markdown: markdown,

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      // { text: '记录', link: '/posts' },
      // { text: '归档', link: '/archives' },
      { text: '关于', link: '/about' }
    ],

    sidebar: autoSidebar(),

    outline: {
      level: [1, 6],
      label: '文章目录'
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/Yechuanjie' }],

    search: {
      provider: 'local'
    },

    // 文章翻页
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    darkModeSwitchLabel: '深色模式',
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '菜单'
  },

  // vite相关配置
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './theme')
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern',
          additionalData: `@use "@/scss/mixin.scss" as *;`
        }
      }
    },
    plugins: [
      pagefindPlugin({
        btnPlaceholder: '搜索',
        placeholder: '搜索文档',
        emptyText: '空空如也',
        heading: '共: {{searchResult}} 条结果',
        customSearchQuery(input) {
          return input
            .replace(/[\u4E00-\u9FA5]/g, ' $& ')
            .replace(/\s+/g, ' ')
            .trim()
        }
      }),

      // HeaderPlugin(),

      AutoImport({
        imports: ['vue'],
        dts: './.vitepress/types/auto-imports.d.ts',
        resolvers: [ElementPlusResolver()]
      }),

      Components({
        dirs: ['./.vitepress/theme/components'],
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        resolvers: [
          ElementPlusResolver({
            importStyle: 'sass'
          })
        ],
        dts: './.vitepress/types/component.d.ts',
        directoryAsNamespace: true
      }),

      UnoCSS()
    ]
  }
})
