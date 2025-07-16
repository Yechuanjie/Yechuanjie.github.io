<template>
  <div class="home-page flex gap-10">
    <div class="my-card flex-column-center">
      <img
        src="https://github.com/Yechuanjie/picx-images-hosting/raw/master/20250707/0-hwq.6t7ef8n8x3.jpeg"
        class="size-25 rounded-full !m-0"
      />
      <span class="font-size-4 font-bold mt-4">Yechuanjie</span>
      <span class="font-size-3 mt-4">山不让尘，川不辞盈</span>
    </div>

    <el-timeline class="w-full">
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
          <div class="mt-2 flex gap-2">
            <el-tag v-for="(item, idx) in post.tags" :key="idx" type="primary">
              {{ item }}
            </el-tag>
          </div>
          <div class="font-size-3.2 mt-2">{{ post.summary }}</div>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
// @ts-ignore
import { data, PostItem } from '../../utils/posts.data'

const posts = data as PostItem[]
const postList = ref<PostItem[]>()
// const colorType = ['primary', 'success', 'info', 'warning', 'danger']

onMounted(() => {
  postList.value = posts
})
</script>
<style lang="scss" scoped>
.home-page {
  .my-card {
    position: sticky;
    top: 90px;
    width: 200px;
    height: 260px;
    border: 1px solid var(--border-color-1);
    flex-shrink: 0;
    padding: 20px 16px;
  }

  :deep() {
    .el-timeline-item {
      list-style: none;
    }
    .el-timeline-item + .el-timeline-item {
      margin-top: 0;
    }
    // .el-timeline-item__timestamp.is-top {
    //   position: absolute;
    //   left: -80px;
    //   font-size: 13px;
    //   margin-bottom: 0;
    // }
  }
}

@media (max-width: 730px) {
  .home-page {
    flex-direction: column;
    .my-card {
      width: 100%;
      min-width: 300px;
      position: static;
    }
  }
}
</style>
