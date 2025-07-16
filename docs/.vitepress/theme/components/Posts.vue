<template>
  <div class="posts-page">
    <el-timeline>
      <el-timeline-item
        v-for="(post, index) in postList"
        :key="index"
        :timestamp="post.date"
        placement="top"
        hollow
        color="var(--vp-c-brand-1)"
      >
        <el-card class="cursor-pointer !rounded-8px">
          <a class="font-600 font-size-5" :href="post.url">{{ post.title }}</a>
          <el-tag v-for="(item, idx) in post.tags" :key="idx">
            {{ item }}
          </el-tag>
          <div class="font-size-3.2 mt-2">{{ post.summary }}</div>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import { data, PostItem } from '../../utils/posts.data'

let posts = data as PostItem[]
const postList = ref<PostItem[]>()

onMounted(() => {
  console.info('posts', posts)
  postList.value = posts
})
</script>
<style lang="scss" scoped>
.posts-page {
  .left-wrap {
    position: sticky;
    top: 92px;
    width: 200px;
    height: 300px;
    margin-top: 3vh;
    border: 1px solid var(--border-color-1);
    border-radius: var(--border-radius);
  }

  :deep() {
    .el-timeline-item {
      list-style: none;
    }
    .el-timeline-item + .el-timeline-item {
      margin-top: 0;
    }
    .el-timeline-item__timestamp.is-top {
      position: absolute;
      left: -80px;
      font-size: 13px;
      margin-bottom: 0;
    }
  }
}
</style>
