/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

/*

*.d.ts ts的类型定义文件，定义vue后缀文件的类型

*/
