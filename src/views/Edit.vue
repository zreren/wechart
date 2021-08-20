<template>
  <div class="common-layout">
    <el-container>
      
      <el-aside width="200px">
        <router-link to="/edit">图表</router-link>|
        <router-link to="/edit/chart/edit">设置</router-link><br>
        <router-view></router-view>
      </el-aside>
      
      <el-container>
        <el-header>
          <edit-main/>
        </el-header>
        <el-main>
          <data-edit/>
        </el-main>
      </el-container>
    
    </el-container>
  </div>


  <button @click="change"> 改变全局变量 </button>
  {{$store.state.name}}

  
</template>

<script>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import EditMain from '../components/Edit/EditMain.vue'
import DataEdit from '../components/Edit/DataEdit.vue'
export default {
    name:'Edit',
    components: {
      EditMain,
      DataEdit 
    },
    setup() {


      const store = useStore()

      onMounted(()=>{
        store.state.name = 'xiaohong'
        console.log(store.state.name)
      })


      /**
       * 改变全局变量的一个地方
       */
      function change() {
        store.state.name = 'giuiuk'
      }



      return {
        change
      }
    }
}
</script>

<style lang="less" scoped>

</style>