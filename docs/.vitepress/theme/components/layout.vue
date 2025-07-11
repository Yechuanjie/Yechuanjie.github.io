<template>
  <ElConfigProvider :locale="zhCn">
    <Layout> </Layout>
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
    console.info('isDark', isDark.value)
  },
  { immediate: true }
)
</script>
