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
          <data-edit/>
        </el-main>
      </el-container>
    
    </el-container>
  </div>

  <div class="mask"></div>

  <div style="position:absolute;top:15%;left:0;width:100%;display:flex;justify-content:center">
  <div class="checkBox">
      <h3>请选择需要制作的图表类型</h3>
      <div @click="checkType('line')" class="line">
        <div class="icon"><svg width="144" height="122" viewBox="0 0 144 122" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="144" height="122" rx="5" fill="white"/>
        <line y1="-1" x2="25.4487" y2="-1" transform="matrix(0.472705 -0.881221 0.700617 0.713538 32 80.0016)" stroke="#2F80ED" stroke-width="2"/>
        <line y1="-1" x2="29.9587" y2="-1" transform="matrix(-0.659473 -0.751728 0.514741 -0.857346 63.8149 80.049)" stroke="#2F80ED" stroke-width="2"/>
        <line y1="-1" x2="45.9713" y2="-1" transform="matrix(-0.49286 0.870108 -0.680958 -0.732322 85.0723 41)" stroke="#2F80ED" stroke-width="2"/>
        <line y1="-1" x2="39.2403" y2="-1" transform="matrix(-0.686228 -0.727387 0.487472 -0.873139 112 69.5428)" stroke="#2F80ED" stroke-width="2"/>
        </svg></div>
        <span class="title">折线图</span><br/>
        <span class="description">多用于展示时间线上持续变化的数据</span>
      </div>
      <div @click="checkType('bar')" class="bar">
        <div class="icon"><svg width="144" height="122" viewBox="0 0 144 122" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="144" height="122" rx="5" fill="white"/>
        <rect x="38" y="20" width="31.3793" height="70" fill="#2F80ED"/>
        <rect x="81.4482" y="51" width="26.5517" height="39" fill="#2F80ED"/>
        </svg>
        </div>
        <span class="title">柱状图</span><br/>
        <span class="description">用来显示随时间的变化，比较不同的类别，比较整体的部分。</span>
      </div>
      <div @click="checkType('pie')" class="center">
        <div class="icon"><svg width="144" height="122" viewBox="0 0 144 122" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="144" height="122" rx="5" fill="white"/>
        <circle cx="72" cy="62" r="32" fill="#5A95E6"/>
        <circle cx="72" cy="62" r="32" fill="#96BCF0"/>
        <path d="M104 62C104 55.1035 101.772 48.3915 97.6478 42.8639C93.5237 37.3364 87.7241 33.2891 81.1132 31.3251C74.5022 29.3611 67.4337 29.5853 60.9605 31.9645C54.4874 34.3437 48.9561 38.7505 45.1906 44.5284C41.4252 50.3062 39.6272 57.146 40.0644 64.0286C40.5016 70.9113 43.1506 77.4685 47.6169 82.7235C52.0831 87.9785 58.1276 91.6499 64.8498 93.1909C71.5719 94.7319 78.6121 94.06 84.9214 91.2752L72 62H104Z" fill="#5A95E6"/>
        <path d="M104 62C104 55.1035 101.772 48.3915 97.6478 42.8639C93.5237 37.3364 87.7241 33.2891 81.1132 31.3251C74.5022 29.3611 67.4337 29.5853 60.9605 31.9645C54.4874 34.3437 48.9561 38.7505 45.1906 44.5284C41.4252 50.3062 39.6272 57.146 40.0644 64.0286C40.5016 70.9113 43.1506 77.4685 47.6169 82.7235C52.0831 87.9785 58.1276 91.6499 64.8498 93.1909C71.5719 94.7319 78.6121 94.06 84.9214 91.2752L72 62H104Z" fill="#5A95E6"/>
        <path d="M104 62C104 57.0894 102.87 52.2447 100.697 47.841C98.5243 43.4372 95.3672 39.5926 91.4701 36.6048C87.5731 33.617 83.0407 31.5662 78.2239 30.6111C73.4071 29.656 68.4351 29.8223 63.6929 31.0971C58.9506 32.3718 54.5654 34.7209 50.8767 37.9624C47.188 41.2039 44.2948 45.2508 42.4211 49.7899C40.5474 54.329 39.7434 59.2384 40.0715 64.138C40.3996 69.0376 41.8509 73.796 44.313 78.0447L72 62H104Z" fill="#2F80ED"/>
        </svg></div>
        <span class="title">饼图</span><br/>
        <span class="description">用于与离散或连续数据进行部分到整体的比较。</span>
      </div>
      <div @click="checkType('scatter')" class="scatter">
        <div class="icon"><svg width="144" height="122" viewBox="0 0 144 122" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="144" height="122" rx="5" fill="white"/>
        <circle cx="58.5" cy="68" r="4" fill="#2F80ED"/>
        <circle cx="76.5" cy="58" r="4" fill="#2F80ED"/>
        <circle cx="60.5" cy="53" r="4" fill="#2F80ED"/>
        <circle cx="94.5" cy="45" r="4" fill="#2F80ED"/>
        <circle cx="90.5" cy="70" r="4" fill="#2F80ED"/>
        <circle cx="43.5" cy="64" r="4" fill="#2F80ED"/>
        <circle cx="43.5" cy="77" r="4" fill="#2F80ED"/>
        <path d="M29.5 90.5H115.5" stroke="#2F80ED" stroke-width="2"/>
        <path d="M29 91L29 31" stroke="#2F80ED" stroke-width="2"/>
        </svg></div>
        <span class="title">散点图</span><br/>
        <span class="description">适合用于在大量数据中显示相关性。</span>
      </div>
  </div>
  </div>

</template>

<script>
import { useStore } from 'vuex'
import EditMain from '../components/Edit/EditMain.vue'
import DataEdit from '../components/Edit/DataEdit.vue'
import { useRoute } from 'vue-router'
export default {
    name:'Edit',
    components: {
      EditMain,
      DataEdit 
    },
    setup() {
      const store = useStore()
      const route = useRoute()
      /**
       * 防止意外刷新和关闭页面
       */
      window.onbeforeunload=function(e){     
        if(route.name == 'ChartType' || route.name == 'ChartEdit'){
          e = e || window.event;
          if (e) {
              // 兼容IE8和Firefox 4之前的版本
              e.returnValue = "当前内容未保存，确认离开？";
          }
          return "当前内容未保存，确认离开？";
        }
      }


      function checkType(typeNow) {
        
        store.state.preChartType = typeNow

        const checkBox = document.getElementsByClassName('checkBox')[0]
        const mask = document.getElementsByClassName('mask')[0]
        checkBox.style.opacity = 0
        setTimeout(() => {
          checkBox.style.zIndex = -1
          mask.style.zIndex = -1
        }, 500);
      }

      

      
      return {
        checkType
      }
    }
}
</script>

<style lang="less" scoped>
  .common-layout {
    background: white;
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
    transition-duration: 0.5s;
    .line,.bar,.center,.scatter {
      flex-basis: 40%;
      height: 225px;
      color: white;

      background: rgba(67, 107, 153, 0.842); //各类图标的未选中状态的背景图

      box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
      backdrop-filter: blur( 8.0px );
      -webkit-backdrop-filter: blur( 8.0px );
      border-radius: 10px;
      border: 1px solid rgba( 255, 255, 255, 0.18 );
      margin-bottom:36px;
      padding: 18px 48px 6px 48px;
      transition:ease-in-out 0.5s;
      cursor:pointer;
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
    .line:hover,.bar:hover,.center:hover,.scatter:hover {
      transform: scale(1.05);
      background: #2F80ED;
    }
    h3 {
      flex-basis: 100%;
      margin-top: 24px;
      margin-bottom: 24px;
      color: #233062;
    }
  }
</style>