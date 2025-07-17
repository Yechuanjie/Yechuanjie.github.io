<template>
  <div class="home-page flex gap-10">
    <div class="my-card flex-column-center">
      <img src="/ycj.jpeg" class="size-25 rounded-full !m-0" />
      <span class="font-size-4 font-bold mt-4">Yechuanjie</span>
      <span class="font-size-3 mt-4">{{ theme }}</span>
    </div>

    <el-timeline class="w-full">
      <el-timeline-item
        v-for="(post, index) in posts"
        :key="index"
        :timestamp="post.date"
        placement="top"
        hollow
        color="var(--vp-c-brand-1)"
      >
        <a :href="post.url">
          <el-card class="cursor-pointer !rounded-8px">
            <div class="flex items-center justify-between">
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
              <img :src="post.cover" class="w-200px h-80px !m-0 rounded-1" v-if="post.cover" />
            </div>
          </el-card>
        </a>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
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
    .title {
      font-size: 16px;
    }
  }
}
</style>
