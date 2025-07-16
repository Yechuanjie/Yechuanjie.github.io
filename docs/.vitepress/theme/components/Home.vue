<template>
  <div class="flex-center mt-30">
    <div class="home-desc flex-center pos-sticky h-300px top-90px">
      <div>
        <div class="font-900 font-size-14 tracking-1 line-height-60px">Hi,</div>
        <div class="font-900 font-size-14 tracking-1 line-height-60px">welcome.</div>

        <div class="flex">
          <div class="tag px-4 py-0.5 border-1 border-solid rounded-2">You Only Live Once.</div>
        </div>

        <div class="flex gap-2 mt-10">
          <a href="/posts" title="blog">
            <div class="i-mdi-playlist-edit size-8 color-[var(--vp-c-text-1)]"></div>
          </a>

          <a href="https://github.com/Yechuanjie" title="github" target="_blank">
            <div class="i-mdi-github size-8 color-[var(--vp-c-text-1)]"></div>
          </a>

          <a href="mailto:1102684711@qq.com" title="email">
            <div class="i-mdi-email size-8 color-[var(--vp-c-text-1)]"></div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
</script>
<style lang="scss" scoped>
.tag {
  position: relative;
  margin-top: 20px;
  &::after {
    margin-right: 4px;
    content: '';
    position: absolute;
    top: 50%;
    right: 100%;
    transform: translateY(-70%) rotate(70deg);
    width: 10px;
    height: 10px;
    border: 2px solid var(--vp-c-text-1);
    border-right: none;
    border-top: none;
    border-bottom-left-radius: 5px;
  }
}
</style>
