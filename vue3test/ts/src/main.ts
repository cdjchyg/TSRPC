
// https://cn.vuejs.org/guide/typescript/overview.html  vue ts教程


import { createApp } from 'vue' // 导入node_modules vue/runtime-dom
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
