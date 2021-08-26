<template>
  <div  class="common-layout">
    <el-container>
      
      <el-aside>
        <div class="menuType">
          <span id="menuTypeItem1" class="menuActive"  @click="changeMenuType(1)">类型</span>
          <span id="menuTypeItem2" @click="changeMenuType(2)">主题</span>
        </div>
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
import {useRouter} from 'vue-router'
export default {
    name:'Edit',
    components: {
      EditMain,
      DataEdit,
      CheckBox 
    },
    setup() {
      const route = useRouter()
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
      /**
       * 设置工具栏的活跃状态
       */
      function changeMenuType(index) {
        if(index == 1){
          document.getElementById('menuTypeItem1').classList.add('menuActive')
          document.getElementById('menuTypeItem2').classList.remove('menuActive')
          route.push('/edit')
        }
        else{
          document.getElementById('menuTypeItem2').classList.add('menuActive')
          document.getElementById('menuTypeItem1').classList.remove('menuActive')
          route.push('/edit/theme')
        }
      }
      return {
        changeMenuType,
      }
    }
}
</script>

<style lang="less" scoped>
  @viewHeight:100vh;
  * {
    box-sizing: border-box;
  }
  .common-layout {
    background: white;
  }
  .el-container.is-vertical {
    height: calc(@viewHeight - 60px);
  }
  .el-aside {
    background: white;;
    height: calc(@viewHeight - 60px);
    .menuType {
      display: flex;
      width: 100%;
      border: 2px solid #e5e5e5;
      span {
        margin: 8px 0px 8px 30px;
        cursor: pointer;
        font-weight: 500;
        font-size: 16px;
        color: rgb(138, 133, 133);
      }
      .menuActive {
        color: black;
      }
    }
  }
  .el-header {
    background: white;
    padding-bottom: 0;
    margin: 0;
    border: 2px solid #e5e5e5;
    height: 65%;
  }
  .el-main {
    background:white;
    padding: 0;
    margin: 0;
    border: 2px solid #e5e5e5;
    height: 35%;
  }
</style>