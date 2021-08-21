<template>
  <div  class="common-layout">
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
          <br><br><br><br><br><br><br><br>
          <br><br><br><br><br><br><br><br>
          <br><br><br><br><br><br><br><br>
          <br><br><br>
          <data-edit/>
        </el-main>
      </el-container>
    
    </el-container>
  </div>

  <div class="mask"></div>

  <div style="position:absolute;top:5%;left:0;width:100%;display:flex;justify-content:center">
  <div class="checkBox">
      <h3>请选择需要制作的图表类型</h3>
      <div @click="checkType('line')" class="line">
        <div class="icon"></div>
        <span class="title">折线图</span><br/>
        <span class="description">多用于展示时间线上持续变化的数据</span>
      </div>
      <div @click="checkType('bar')" class="bar">
        <div class="icon"></div>
        <span class="title">柱状图</span><br/>
        <span class="description">用来显示随时间的变化，比较不同的类别，比较整体的部分。</span>
      </div>
      <div @click="checkType('center')" class="center">
        <div class="icon"></div>
        <span class="title">饼图</span><br/>
        <span class="description">用于与离散或连续数据进行部分到整体的比较。</span>
      </div>
      <div @click="checkType('scatter')" class="scatter">
        <div class="icon"></div>
        <span class="title">散点图</span><br/>
        <span class="description">适合用于在大量数据中显示相关性。</span>
      </div>
  </div>
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
  .common-layout {
    
  }
  .mask {
    position: fixed;
    top:0;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 8;
    background: rgba(80, 116, 183, 0.25);
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
  }
  .checkBox {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 750px;
    z-index: 9;
    background: rgba( 255, 255, 255, 0.95 );
    box-shadow: 0 8px 32px 0 rgba(48, 53, 126, 0.37);
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    .line,.bar,.center,.scatter {
      flex-basis: 40%;
      height: 225px;
      background: rgba( 74, 144, 226, 0.70 );
      box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
      backdrop-filter: blur( 8.0px );
      -webkit-backdrop-filter: blur( 8.0px );
      border-radius: 10px;
      border: 1px solid rgba( 255, 255, 255, 0.18 );
      margin-bottom:36px;
      padding: 18px 48px 6px 48px;
      .title {
        font-size: 20px;
      }
      .description {
        font-size: 12px;
      }
      .icon {
        margin-left: 50%-36px;
        width: 144px;
        height: 122px;
        border-radius: 8px;
        margin-bottom: 12px;
        background: white;
      }
    }
    h3 {
      flex-basis: 100%;
      margin-top: 24px;
      margin-bottom: 24px;
    }
  }
</style>