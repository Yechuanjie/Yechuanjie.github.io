<template>
  <div class="article-meta-info mt-10px">
    <div class="flex-middle gap-20px">
      <div class="flex-middle gap-1">
        <span class="i-mdi-account-outline"></span>
        <span class="cursor-pointer" @click="router.go('/')">{{ author }}</span>
      </div>
      <div class="flex-middle gap-1">
        <span class="i-mdi-access-time"></span>
        <span>{{ updateTime }}</span>
      </div>
      <TagList :tags="tags" />
    </div>
    <!-- 每篇文章摘要 -->
    <div v-if="summary" class="summary">{{ summary }}</div>
  </div>
</template>

<script lang="ts" setup>
import { dayjs } from 'element-plus'
import { useData, useRouter } from 'vitepress'
import { PostItem } from '../../utils/posts.data'

const router = useRouter()
const { frontmatter } = useData()

const author = `Yecuk`

const updateTime = computed(() => {
  let data = frontmatter.value as PostItem
  return dayjs(data.date).format('YYYY-MM-DD HH:mm:ss')
})

const tags = computed(() => {
  return (frontmatter.value as PostItem).tags
})

const summary = computed(() => {
  return (frontmatter.value as PostItem).summary
})

const toTag = (tag: string) => {
  console.info(tag)
}
</script>

<style scoped lang="scss">
.article-meta-info {
  span {
    color: var(--grey-color-1);
    font-size: 14px;
  }

  .summary {
    background-color: var(--vp-c-gray-soft);
    padding: 16px;
    border-radius: 8px;
    margin-top: 15px;
    color: var(--vp-c-text-1);
    font-size: 14px;
  }
}
</style>
