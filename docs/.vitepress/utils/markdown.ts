import type { MarkdownOptions } from 'vitepress'

export const markdown: MarkdownOptions = {
  lineNumbers: true,
  image: {
    lazyLoading: true
  },
  config: (md) => {
    md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
      let htmlResult = slf.renderToken(tokens, idx, options)
      if (tokens[idx].tag === 'h1')
        htmlResult += `\n<ClientOnly><ArticleMetaInfo v-if="$frontmatter?.showMeta ?? true" /></ClientOnly>`
      return htmlResult
    }
  }
}
