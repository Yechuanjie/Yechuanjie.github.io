<template>
  <div class="posts-page">
    <el-timeline style="max-width: 900px">
      <el-timeline-item
        v-for="(activity, index) in postList"
        :key="index"
        :timestamp="activity.date"
        placement="top"
        color="var()"
      >
        <el-card class="cursor-pointer">
          <div>{{ activity.title }}</div>
          <div>{{ activity.summary }}</div>
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
  :deep() {
    .el-timeline-item {
      list-style: none;
    }
    .el-timeline-item + .el-timeline-item {
      margin-top: 0;
    }
  }
}
</style>
