<template>
  <div class="posts">
    <div class="post-card" v-for="(post, idx) in postList" :key="idx">
      <h2 class="">
        <a :href="post.url" class="post-link">{{ post.title }}</a>
      </h2>
      <div class="flex-middle gap-1">
        <span class="font-size-14px font-600">{{ post.date.string }}</span>
        <span class="font-size-15px font-600"></span>
        <ElSpace>
          <ElTag :checkable="false" v-for="tag in post.tags" :key="tag">{{ tag }}</ElTag>
        </ElSpace>
      </div>
      <p v-html="post.excerpt"></p>
    </div>

    <ElPagination background layout="prev, pager, next" :total="posts.length" />
  </div>
</template>

<script setup lang="ts">
import { data as posts, Post } from '../posts.data.mts'

const postList = ref<Post[]>([])
onMounted(() => {
  postList.value = posts.slice(0, 5)
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
    .post-link {
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  :deep() {
    // .arco-pagination-item + .arco-pagination-item {
    //   margin-top: 0;
    // }
  }
}
</style>
