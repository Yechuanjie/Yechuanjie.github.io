<template>
  <Layout></Layout>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
const { isDark } = useData()

watch(
  isDark,
  () => {
    // 设置arco-design的暗黑模式
    if (isDark.value) {
      document.body.setAttribute('arco-theme', 'dark')
    } else {
      document.body.removeAttribute('arco-theme')
    }
  },
  { immediate: true }
)
</script>
