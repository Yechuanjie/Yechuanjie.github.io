<template>
  <div class="mt-24px">
    <Giscus
      :key="page.filePath"
      repo="Yechuanjie/Yechuanjie.github.io"
      repo-id="R_kgDOOeSWMg"
      category="Announcements"
      category-id="DIC_kwDOOeSWMs4CtEd1"
      mapping="title"
      strict="0"
      reactions-enabled="1"
      emit-metadata="0"
      input-position="bottom"
      theme="preferred_color_scheme"
      lang="zh-CN"
    ></Giscus>
  </div>
</template>
<script setup lang="ts">
import Giscus from '@giscus/vue'
import { useData } from 'vitepress'

const { page } = useData()
</script>
<style lang="scss" scoped></style>
