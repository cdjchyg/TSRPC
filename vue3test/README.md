
https://www.runoob.com/vue3/vue3-tutorial.html

安装vue官方命令行工具vue
npm install -g @vue/cli
可以用于创建项目等
vue ui 打开vue命令界面，可以在该ui上创建工程，管理工程等
    选择预设时 选择手动 -> 添加typescript的支持


======================================================
vue2
// https://zhuanlan.zhihu.com/p/419896443
对象: 通过defineProperty对对象的已有属性值的读取和修改进行劫持(监视/拦截)
数组: 通过重写数组更新数组一系列更新元素的方法来实现元素修改的劫持

// 使用 defineProperty 监控 data函数返回对象的每个成员变化；
// 使用方法 Object.defineProperty, 比如:
// Object.defineProperty(HelloVueApp.data(), message, {get(){ ... }, set(newValue) {...}})
// 就可以监控 message属性的变化

======================================================
vue3
通过Proxy(代理): 拦截对data任意属性的任意(13种)操作, 包括属性值的读写, 属性的添加, 属性的删除等…
通过 Reflect(反射): 动态对被代理对象的相应属性进行特定的操作
源码 https://github.com/vuejs/core


官方文档：
https://cn.vuejs.org/guide/introduction.html




