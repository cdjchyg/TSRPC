
<template>
  <div>
    <div class="select-box">
      <el-form :inline="true" :model="selectData" class="demo-form-inline">
        <el-form-item label="标题">
          <el-input v-model="selectData.title" placeholder="请输入关键字" />
        </el-form-item>
        <el-form-item label="详情">
          <el-input v-model="selectData.introduce" placeholder="请输入关键字" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table :data="dataList.comList" border style="width: 100%">
      <el-table-column prop="id" label="ID" width="180" />
      <el-table-column prop="title" label="标题" width="180" />
      <el-table-column prop="introduce" label="详情" />
    </el-table>
    <el-pagination @current-change="currentChange" @size-change="sizeChange" layout="prev, pager, next" :total="selectData.count" />
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, computed} from 'vue'
import {getGoodsList} from "../request/api"
import {InitData} from '../type/goods'
export default defineComponent({
  setup(){
    const data = reactive(new InitData())
    getGoodsList().then((res)=>{
      console.log(res)
      data.list = res.data
      data.selectData.count = res.data.length
    })
    const dataList=reactive({
      //computed 当依赖的属性（page pagesize）发生变化时，会自动计算
      comList:computed(()=>{
        
        return data.list.slice(
            (data.selectData.page-1)*data.selectData.pagesize, 
            data.selectData.page*data.selectData.pagesize)
      })
    })
    const currentChange = (page:number)=>{
      data.selectData.page = page
    }
    const sizeChange = (pagesize:number)=>{
      data.selectData.pagesize = pagesize
    }
    return {...toRefs(data), currentChange, sizeChange, dataList}
  }
})

</script>

<style scoped>

</style>