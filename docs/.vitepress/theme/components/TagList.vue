<template>
  <div class="tag-list flex-middle gap-1">
    <span class="i-mdi-tag-multiple-outline"></span>
    <span class="cursor-pointer" v-for="(item, idx) in tags" @click="toTag(item)">
      {{ item + `${idx == tags.length - 1 ? '' : ','}` }}
    </span>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{ tags: string[] }>()

const toTag = (tag: string) => {
  console.info(tag)
}
</script>
<style lang="scss" scoped>
.tag-list {
  span {
    color: var(--grey-color-1);
    font-size: 14px;
  }
}
</style>
