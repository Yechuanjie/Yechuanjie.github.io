// import { type UserConfig } from 'vitepress'
import { usePosts } from '../hooks/usePosts'
// import { type ThemeConfig } from '../type'

const { posts, rewrites } = await usePosts({})

// // 极简风格主题，默认基础配置，可自行覆盖
// export default {
//   title: '只抄',
//   titleTemplate: 'VitePress Theme Minimalism',
//   description: 'VitePress Theme Minimalism',
//   rewrites,
//   cleanUrls: true,
//   ignoreDeadLinks: true,
//   themeConfig: {
//     posts,
//     page: {
//       max: 5
//     },
//     logo: '/profile.png',
//     outline: { level: 2 },
//     nav: [
//       { text: '首页', link: '/' },
//       { text: '文章', link: '/page-1' },
//       { text: '文档', link: '/docs/doc1' },
//       { text: '分类', link: '/category' },
//       { text: '标签', link: '/tags' },
//       { text: '归档', link: '/archives' }
//     ],
//     sidebar: {
//       '/docs': [
//         {
//           text: '如何使用电饭煲',
//           items: [
//             { text: '选择合适的电饭煲', link: '/docs/doc1' },
//             { text: '煮出松软米饭的技巧', link: '/docs/doc2' },
//             { text: '电饭煲的多功能用途', link: '/docs/doc3' },
//             { text: '电饭煲的清洁与保养', link: '/docs/doc4' },
//             { text: '电饭煲常见问题处理', link: '/docs/doc5' }
//           ]
//         }
//       ]
//     },
//     socialLinks: [{ icon: 'github', link: 'https://github.com/izhichao/vitepress-theme-minimalism' }],
//     footer: {
//       message:
//         'Theme by <a href="https://github.com/izhichao/vitepress-theme-minimalism" target="_blank">Minimalism</a>',
//       copyright: 'Copyright © 2017-2025 <a href="https://github.com/izhichao" target="_blank">只抄</a>'
//     },
//     search: { provider: 'local' }
//   },
//   markdown: {
//     lineNumbers: true
//   },
//   srcExclude: ['README.md', 'README_en-US.md']
// } as UserConfig<ThemeConfig>

// export default {
//   title: 'wwwwww'
// }

// 极简风格主题，默认基础配置，可自行覆盖
module.exports = {
  title: '只抄',
  titleTemplate: 'VitePress Theme Minimalism',
  description: 'VitePress Theme Minimalism',
  rewrites,
  cleanUrls: true,
  ignoreDeadLinks: true,
  themeConfig: {
    posts,
    page: {
      max: 5
    },
    logo: '/profile.png',
    outline: { level: 2 },
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/page-1' },
      { text: '文档', link: '/docs/doc1' },
      { text: '分类', link: '/category' },
      { text: '标签', link: '/tags' },
      { text: '归档', link: '/archives' }
    ],
    sidebar: {
      '/docs': [
        {
          text: '如何使用电饭煲',
          items: [
            { text: '选择合适的电饭煲', link: '/docs/doc1' },
            { text: '煮出松软米饭的技巧', link: '/docs/doc2' },
            { text: '电饭煲的多功能用途', link: '/docs/doc3' },
            { text: '电饭煲的清洁与保养', link: '/docs/doc4' },
            { text: '电饭煲常见问题处理', link: '/docs/doc5' }
          ]
        }
      ]
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/izhichao/vitepress-theme-minimalism' }],
    footer: {
      message:
        'Theme by <a href="https://github.com/izhichao/vitepress-theme-minimalism" target="_blank">Minimalism</a>',
      copyright: 'Copyright © 2017-2025 <a href="https://github.com/izhichao" target="_blank">只抄</a>'
    },
    search: { provider: 'local' }
  },
  markdown: {
    lineNumbers: true
  },
  srcExclude: ['README.md', 'README_en-US.md']
}
