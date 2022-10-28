
<template>
<!--  div 定义一个class，通过class设置div属性，和背景-->
  <div class="login-box">
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
  setup()
  {
    return {}
  }
})
</script>

<!--css预处理语言 scss-->
<style lang="scss" scoped>
  .login-box{
    width: 100%;
    height: 100%;
    background: url("../assets/bg.jpg");
  }
</style>