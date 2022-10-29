
<template>
<!--  div 定义一个class，通过class设置div属性，和背景-->
  <div class="login-box">
    <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="80px"
        class="demo-ruleForm"
    >
      <h2>后台管理系统</h2>
<!--      rules通过 prop 属性关联 -->
      <el-form-item label="账号" prop="username"> 
        <el-input v-model="ruleForm.username" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
            v-model="ruleForm.password"
            type="password"
            autocomplete="off"
        />
      </el-form-item>
      <el-form-item>
        <el-button class="loginBtn" type="primary" @click="submitForm(ruleFormRef)"
        >登录</el-button
        >
        <el-button class="loginBtn" @click="resetForm(ruleFormRef)">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs } from 'vue'
import {LoginData} from "../type/login"
export default defineComponent({
  setup()
  {
    const data = reactive(new LoginData())
    const rules = {
      username:[
        {
          required:true,
          message:"请输入账号",
          trigger:"blur",
        },
        {
          min:3,
          max:10,
          message:"账号长度在3到10之间",
          trigger:"blur",
        }
      ],
      password:[
        {
          required:true,
          message:"请输入你的密码",
          trigger:"blur",
        },
        {
          min:3,
          max:10,
          message:"密码长度 3 到10之间",
          trigger:"blur",
        }
      ]
    }
    
    return {...toRefs(data), rules}
  }
})
</script>

<!--https://www.bilibili.com/video/BV1nr4y1G73d?p=5&vd_source=427767c4c8b4f789172c77badc06350c-->
<!--SCSS(SASS) 预处理语言 一款强化css的辅助工具，在css的基础上添加了变量、嵌套和混合、导入等高级功能，使用它可以更好的管理样式文件 -->
<!-- padding 内边框属性，  margin 外边框属性 -->
<style lang="scss" scoped>
  .login-box{
    width: 100%;
    height: 100%;
    background: url("../assets/bg.jpg");
    padding: 1px; // 如果没有padding，受到子元素 margin影响父元素也会下移200px，父元素上方会出现白色外边框；设置了padding后父元素不会再受子元素margin影响下移
    text-align: center;
    .demo-ruleForm{
      width: 500px;
      margin: 200px auto; // 外边框属性 margin: 200px auto; 上 200px，左右下自动
      background-color: #ffffff;
      padding: 30px; // 内边框属性，如果没有它大小刚好包行内容，有了该属性后在内容的基础上内部扩充 30px
      border-radius: 20px;
    }
    .loginBtn{
      width: 48%;
    }
    h2{
      margin-bottom: 5px;
    }
  }
</style>