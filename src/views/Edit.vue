<template>
  <div  class="common-layout">
    <el-container>
      
      <el-aside>
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
  <check-box/>
</template>

<script>
import EditMain from '../components/Edit/EditMain.vue'
import DataEdit from '../components/Edit/DataEdit.vue'
import CheckBox from '../components/Edit/CheckBox.vue'
export default {
    name:'Edit',
    components: {
      EditMain,
      DataEdit,
      CheckBox 
    },
    setup() {
      /**
       * 防止意外刷新和关闭页面
       */
      // window.onbeforeunload=function(e){     
      //   if(route.name == 'ChartType' || route.name == 'ChartEdit'){
      //     e = e || window.event;
      //     if (e) {
      //         // 兼容IE8和Firefox 4之前的版本
      //         e.returnValue = "当前内容未保存，确认离开？";
      //     }
      //     return "当前内容未保存，确认离开？";
      //   }
      // }
      return {
      }
    }
}
</script>

<style lang="less" scoped>
  @viewHeight:100vh;
  .common-layout {
    background: white;
  }
  .el-aside {
    background: salmon;
    height: calc(@viewHeight - 60px);
  }
  .el-header {
    background: violet;
    height: 70%;
  }
  .el-main {
    background: yellowgreen;
    height: 30%;
  }
</style>