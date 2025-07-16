import { defineConfig } from 'vitepress'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'
import { generateSidebar } from 'vitepress-sidebar'
import { SidebarItem } from 'vitepress-sidebar/types'

const autoSidebar = () => {
  let result = generateSidebar({
    documentRootPath: '/docs/posts',
    collapseDepth: 3,
    useTitleFromFrontmatter: true,
    sortMenusByFrontmatterDate: true,
    sortMenusOrderByDescending: true
  }) as SidebarItem[]
  return result.map((year) => {
    console.info(year)
    year.items?.map((i) => {
      i.link = `/posts${i.link}`
    })
    return {
      ...year,
      items: year.items?.reverse()
    }
  })
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Yechuanjie',
  description: '',
  lang: 'zh-CN',
  head: [['link', { rel: 'icon', href: '/green_book.png' }]],
  cleanUrls: true,
  appearance: 'dark',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      // { text: '记录', link: '/posts' },
      // { text: '归档', link: '/archives' },
      { text: '关于', link: '/about' }
    ],

    sidebar: autoSidebar(),

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
          api: 'modern'
          // additionalData: `@use "@/scss/variable.scss" as *;`
        }
      }
    },
    plugins: [
      AutoImport({
        imports: ['vue'],
        dts: './.vitepress/types/auto-imports.d.ts',
        resolvers: [ElementPlusResolver()]
      }),

      Components({
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
