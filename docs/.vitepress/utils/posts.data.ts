import { dayjs } from 'element-plus'
import { createContentLoader } from 'vitepress'

export interface PostItem {
  /** 标题 */
  title: string
  /** 发布日期 @example 2025-07-15 */
  date: string
  /** 标签 */
  tags: string[]
  /** 摘要 */
  summary: string | undefined
  /** 发布日期的unix时间戳 @example 1548381600 */
  timestamp: number
  /** 路径地址 */
  url: string
  /** 封面图 */
  cover: string
}

export default createContentLoader('posts/**/*.md', {
  transform(raw): PostItem[] {
    return (
      raw
        .map(({ url, frontmatter, excerpt }) => {
          return {
            url,
            title: frontmatter.title,
            date: dayjs(frontmatter.date).format('YYYY-MM-DD'),
            tags: frontmatter.tags,
            summary: frontmatter.summary,
            timestamp: dayjs(frontmatter.date).unix(),
            cover: frontmatter.cover
          }
        })
        // 倒序
        .sort((a, b) => b.timestamp - a.timestamp)
    )
  }
})
