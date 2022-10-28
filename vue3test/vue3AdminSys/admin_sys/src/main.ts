import { createApp } from 'vue'

// 完整引入
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)

// 网址引入
// app.use(ElementPlus)

app.mount('#app')
