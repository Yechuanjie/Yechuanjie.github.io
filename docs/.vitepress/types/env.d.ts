/// <reference types="vitepress" />  // 如果使用 VitePress，需要这行
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
