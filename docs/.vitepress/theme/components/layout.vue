<template>
  <Layout>
    <!-- <template></template> -->
  </Layout>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

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
