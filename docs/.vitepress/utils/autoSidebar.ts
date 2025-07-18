import { generateSidebar } from 'vitepress-sidebar'
import { SidebarItem } from 'vitepress-sidebar/types'

export const autoSidebar = () => {
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
