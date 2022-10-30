
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
<!--    total 是按照每页显示10条处理，由于我们显示5条所以乘以2-->
    <el-pagination @current-change="currentChange" @size-change="sizeChange" layout="prev, pager, next" :total="selectData.count * 2" />
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, computed, watch} from 'vue'
import {getGoodsList} from "../request/api"
import {InitData, ListInt} from '../type/goods'
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
    const onSubmit = ()=>{
      // console.log(data.selectData)
      let arr:ListInt[] = []
      if (data.selectData.title || data.selectData.introduce)
      {
        if(data.selectData.title)
        {
          arr = data.list.filter((value)=>{
            return value.title.indexOf(data.selectData.title) >= 0
          })
        }
        if(data.selectData.introduce)
        {
          arr = data.list.filter((value)=>{
            return value.introduce.indexOf(data.selectData.introduce) >= 0
          })
        }
      }else {
        arr = data.list
      }
      data.selectData.count = arr.length
      data.list = arr
    }
    watch([()=>data.selectData.title, ()=>data.selectData.introduce], ()=>{
      if (data.selectData.title == "" && data.selectData.introduce == "")
      {
        // TODO提取公共方法
        getGoodsList().then((res)=>{
          // console.log(res)
          data.list = res.data
          data.selectData.count = res.data.length
        })
      }
    })
    return {...toRefs(data), currentChange, sizeChange, dataList, onSubmit}
  }
})

</script>

<style scoped>

</style>