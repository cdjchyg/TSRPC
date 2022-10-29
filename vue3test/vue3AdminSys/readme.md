
视屏教程 练手项目
电商后台系统
https://www.bilibili.com/video/BV1nr4y1G73d/?spm_id_from=333.337.search-card.all.click&vd_source=427767c4c8b4f789172c77badc06350c

vue create admin_sys // 创建工程
    ? Please pick a preset: Manually select features
    ? Check the features needed for your project: Babel, TS, Router, CSS Pre-processors, Linter
    ? Choose a version of Vue.js that you want to start the project with 3.x
    ? Use class-style component syntax? No
    ? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? Yes
    ? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
    ? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sass/SCSS (with dart-sass)
    ? Pick a linter / formatter config: Basic
    ? Pick additional lint features: Lint on save
    ? Where do you prefer placing config for Babel, ESLint, etc.? In package.json
    ? Save this as a preset for future projects?(y/N) N  // 是否创建成一个预设，后续创建工程直接使用
     
      
 运行项目
 npm run serve  // 编译项目、启动服务运行工程，点击 显示的网址 就可以打开网页; 改动后会及时编译，再次点击地址打开就是最新的
 
 使用的一个vue ui框架
 element plus
 https://element-plus.gitee.io/zh-CN/guide/quickstart.html
 安装：
    npm install element-plus --save   // 安装好后，可以在package.json中dependencies看到看到 element plus的依赖
 引入方式参考 https://element-plus.gitee.io/zh-CN/guide/quickstart.html
 按需引入：装插件 npm install -D unplugin-vue-components unplugin-auto-import
 
 http mock,需要挂vpn
 https://www.fastmock.site/#/
 