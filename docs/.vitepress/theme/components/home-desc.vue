<template>
  <div class="home-desc flex-center gap-10">
    <div>
      <div class="font-900 font-size-14 tracking-1">Hi,</div>
      <div class="font-900 font-size-14 tracking-1">welcome.</div>

      <div class="flex">
        <div class="tag px-4 py-0.5 border-1 border-solid rounded-2">You Only Live Once.</div>
      </div>

      <div class="flex gap-2 mt-10">
        <a href="/blog" title="blog">
          <div class="i-mdi-playlist-edit size-8 color-#3c3c43 dark:(color-#dfdfd6)"></div>
        </a>

        <a href="https://github.com/Yechuanjie" title="github" target="_blank">
          <div class="i-mdi-github size-8 color-#3c3c43 dark:(color-#dfdfd6)"></div>
        </a>

        <a href="mailto:1102684711@qq.com" title="email">
          <div class="i-mdi-email size-8 color-#3c3c43 dark:(color-#dfdfd6)"></div>
        </a>
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
    border: 2px solid black;
    border-right: none;
    border-top: none;
    border-bottom-left-radius: 5px;
  }
}
.dark {
  .tag {
    &::after {
      border-color: white;
    }
  }
}
</style>
