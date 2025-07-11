<template>
  <div class="posts">
    <div class="post-card" v-for="(post, idx) in articles" :key="idx">
      <h2 class="">
        <a :href="post.url">{{ post.title }}</a>
      </h2>
      <div class="flex-middle gap-2">
        <span class="font-size-15px font-600">{{ post.date.string }}</span>
        <span class="font-size-15px font-600">/</span>
        <a-space>
          <a-tag :checkable="false" v-for="tag in post.tags" :key="tag" color="blue">{{ tag }}</a-tag>
        </a-space>
      </div>
      <p v-html="post.excerpt"></p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { data as posts } from '../posts.data.mts'

const articles = posts.filter((item) => item.url !== '/posts/')
onMounted(() => {
  console.info(articles)
})
</script>
<style lang="scss" scoped>
.posts {
  .post-card {
    &:first-child {
      h2 {
        border: none;
        margin-top: 0;
      }
    }
  }
}
</style>
