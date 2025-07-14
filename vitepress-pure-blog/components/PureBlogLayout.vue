<template>
  <Layout>
    <template #doc-after>
      sdass
      <!-- <AdItem :custom="ad" type="doc" />
      <AdItem :adsense="adsense" type="doc" />
      <CommentItem /> -->
    </template>
    <template #doc-footer-before>
      <PostInfoItem />
    </template>
  </Layout>
</template>
<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import PostInfoItem from './PostInfoItem.vue'

const { Layout } = DefaultTheme
</script>
<style lang="scss" scoped></style>
