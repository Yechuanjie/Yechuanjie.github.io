<template>
  <div class="home-page flex gap-10">
    <div class="my-card flex-column-center">
      <img src="/ycj.jpeg" class="size-25 rounded-full !m-0" />
      <span class="font-size-4 font-bold mt-4">Yecuk</span>
      <span class="font-size-3 mt-4">山不让尘，川不辞盈</span>
    </div>

    <ElTimeline class="w-full">
      <ElTimelineItem
        v-for="(post, index) in posts"
        :key="index"
        :timestamp="post.date"
        placement="top"
        hollow
        color="var(--vp-c-brand-1)"
      >
        <a :href="post.url">
          <ElCard class="cursor-pointer !rounded-8px">
            <div>
              <div class="flex items-center flex-wrap gap-2">
                <div class="title">{{ post.title }}</div>
                <div class="flex gap-2">
                  <el-tag v-for="(item, idx) in post.tags" :key="idx" type="primary">
                    {{ item }}
                  </el-tag>
                </div>
              </div>
              <div class="font-size-3.2 mt-2 color-[var(--grey-color-1)]">{{ post.summary }}</div>
            </div>
          </ElCard>
        </a>
      </ElTimelineItem>
    </ElTimeline>
  </div>
</template>
<script setup lang="ts">
// @ts-ignore
import { data, PostItem } from '../../utils/posts.data'
import { useData } from 'vitepress'

const { frontmatter, theme } = useData()

console.info(theme.value)
const posts = data as PostItem[]
</script>
<style lang="scss" scoped>
.home-page {
  .my-card {
    position: sticky;
    top: 90px;
    width: 200px;
    height: 260px;
    border: 1px solid var(--border-color-1);
    border-radius: var(--border-radius);
    flex-shrink: 0;
    padding: 20px 16px;
  }
  .title {
    font-weight: 600;
    font-size: 20px;
    color: var(--black-color-1);
  }

  :deep() {
    .el-timeline-item {
      list-style: none;
    }
    .el-timeline-item + .el-timeline-item {
      margin-top: 0;
    }
    .el-card__body {
      // min-height: 100px;
      // padding: 12px 20px;
    }
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
    .title {
      font-size: 16px;
    }
    .post-img {
      display: none;
    }
    :deep() {
      .el-card__body {
        padding: 12px;
      }
    }
  }
}
</style>
