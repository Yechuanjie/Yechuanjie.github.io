<template>
  <div class="flex-column-center pb-5">
    <div class="font-size-14px">
      本站总访问量
      <span id="vercount_value_site_pv" class="font-bold">--</span> 次 本站访客数
      <span id="vercount_value_site_uv" class="font-bold">--</span> 人次
    </div>
    <p class="color-coolGray font-size-14px">
      {{ `Copyright © 2025 - present` }} <a href="https://github.com/Yechuanjie">Yechuanjie</a>
    </p>
  </div>
</template>
<script setup lang="ts">
// 加载vercount访问统计
const loadVerCount = () => {
  // 页面浏览量：每访问一次加一。
  // 独立访客量：通过用户的 UserAgent 和 IP 地址判断。
  if (typeof window !== 'undefined') {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://events.vercount.one/js'
    script.async = true
    document.body.appendChild(script)
  }
}

onMounted(() => {
  loadVerCount()
})
</script>
<style lang="scss" scoped></style>
