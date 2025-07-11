import { createContentLoader } from 'vitepress'

interface Post {
  title: string
  url: string
  date: {
    time: number
    string: string
  }
  tags: string[]
  categories: string[]
  excerpt: string | undefined
}

declare const data: Post[]
export { data }

export default createContentLoader('posts/**/*.md', {
  excerpt: true,
  transform(raw): Post[] {
    return raw
      .map(({ url, frontmatter, excerpt }) => {
        return {
          title: frontmatter.title,
          url,
          tags: frontmatter.tags,
          categories: frontmatter.categories,
          excerpt,
          date: formatDate(frontmatter.date)
        }
      })
      .sort((a, b) => b.date.time - a.date.time)
  }
})

function formatDate(raw: string): Post['date'] {
  const date = new Date(raw)
  date.setUTCHours(12)
  return {
    time: +date,
    // 显示格式 YYYY-MM-DD
    string: date
      .toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      })
      .replace(/\//g, '-')
  }
}
