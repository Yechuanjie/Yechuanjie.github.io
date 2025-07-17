<template>
  <ElConfigProvider :locale="zhCn">
    <Layout>
      <template #doc-after>
        <GithubDiscuss></GithubDiscuss>
      </template>
      <template #layout-bottom>
        <Vercount v-if="!isPost"></Vercount>
      </template>
    </Layout>
  </ElConfigProvider>
</template>

<script setup lang="ts">
import { useData, useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import imageViewer from 'vitepress-plugin-image-viewer'

const { Layout } = DefaultTheme
const { isDark } = useData()
const route = useRoute()
const isPost = computed(() => {
  return route.path.includes('/posts')
})
// 图片放大
imageViewer(route)

watch(
  isDark,
  () => {
    // element plus的暗黑模式和vitepress用法一致，无需单独处理
    console.info('isDark', isDark.value)
  },
  { immediate: true }
)
</script>
