<template>
  <ElConfigProvider :locale="zhCn">
    <Layout>
      <template #layout-bottom>
        <Vercount></Vercount>
      </template>
    </Layout>
  </ElConfigProvider>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const { Layout } = DefaultTheme
const { isDark } = useData()

watch(
  isDark,
  () => {
    // element plus的暗黑模式和vitepress用法一致，无需单独处理
    console.info('isDark', isDark.value)
  },
  { immediate: true }
)
</script>
