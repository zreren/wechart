<template>
   <p>折线图
    <i  @click="openNew" class="el-icon-question"></i>
    </p> 
   <el-divider></el-divider>
   <img @click="changeType('line')" src="https://sf1-ttcdn-tos.pstatp.com/obj/larkcloud-file-storage/baas/qc5abu/d8c7500afbc28dff_1629997461526.png" alt="">
   <img @click="addarea()" src="https://sf1-ttcdn-tos.pstatp.com/obj/larkcloud-file-storage/baas/qc5abu/ab8a0479dd66e0e1_1630002625952.png" alt="">
   <p>柱状图
     <i @click="openNew" class="el-icon-question"></i>
     </p> 
   <el-divider></el-divider>
   <img @click="changeType('bar')" src="https://sf1-ttcdn-tos.pstatp.com/obj/larkcloud-file-storage/baas/qc5abu/b63a4a4f30d4e597_1630004043524.png" alt="">
   <img @click="addStack()" src="https://sf1-ttcdn-tos.pstatp.com/obj/larkcloud-file-storage/baas/qc5abu/a819d49b3fc19d84_1630048437112.png" alt="">
   
   <p>散点图(不建议与其他类型交换)
     <i @click="openNew" class="el-icon-question"></i>
     </p> 
   <el-divider></el-divider>
   <img @click="changeType('scatter')" src="https://sf1-ttcdn-tos.pstatp.com/obj/larkcloud-file-storage/baas/qc5abu/0776ceba190eb4de_1630050870509.png" alt="">
   <img @click="changeSize()" src="https://sf1-ttcdn-tos.pstatp.com/obj/larkcloud-file-storage/baas/qc5abu/421fa5087349c439_1630053107172.png" alt="">

    <p>散点图(不建议与其他类型交换)
     <i @click="openNew" class="el-icon-question"></i>
     </p> 
   <el-divider></el-divider>
   <img @click="changePie('60%')" src="https://sf1-ttcdn-tos.pstatp.com/obj/larkcloud-file-storage/baas/qc5abu/1a787c1712bf1cac_1630055252792.png" alt="">
   <img @click="changePie(['30%','60%'])" src="https://sf1-ttcdn-tos.pstatp.com/obj/larkcloud-file-storage/baas/qc5abu/91e025d56fcd5b52_1630055256279.png" alt="">
</template>

<script>
import { cahrtTemplate }  from '../../common/chart/chart'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { ElMessage } from 'element-plus'
export default {
  name:'ChartType',
  setup() {
    const store = useStore()
    function changeType(value) {
        if((value !== store.state.preChartType) && (value === 'pie' || store.state.preChartType === 'pie' ) )
          ElMessage.error('目前饼图只能和环形图互换哦')
        else
        {
          for(let item in cahrtTemplate[store.state.preChartType].series)
          {
            //其他数据是为了初始化
            cahrtTemplate[store.state.preChartType].xAxis.boundaryGap = true
            cahrtTemplate[store.state.preChartType].series[item].areaStyle = undefined
            cahrtTemplate[store.state.preChartType].series[item].stack = undefined
            cahrtTemplate[store.state.preChartType].series[item].type = value
          }

          //为scatter添加散点大小
          if(value === 'scatter')
          for(let item in cahrtTemplate[store.state.preChartType].series)
          cahrtTemplate[store.state.preChartType].series[item].symbolSize = 20
          else
          for(let item in cahrtTemplate[store.state.preChartType].series)
          cahrtTemplate[store.state.preChartType].series[item].symbolSize = undefined
          
        }
    }
    function addarea() {
        if(store.state.preChartType === 'pie')
          ElMessage.error('目前饼图只能和环形图互换哦')
        else {
          for(let item in cahrtTemplate[store.state.preChartType].series)
          {
            cahrtTemplate[store.state.preChartType].series[item].type = 'line'
            cahrtTemplate[store.state.preChartType].xAxis.boundaryGap = false
            cahrtTemplate[store.state.preChartType].series[item].areaStyle = {}
          }
        }
    }
    function addStack() {
        if(store.state.preChartType === 'pie')
          ElMessage.error('目前饼图只能和环形图互换哦')
        else {
          for(let item in cahrtTemplate[store.state.preChartType].series)
          {
            cahrtTemplate[store.state.preChartType].series[item].type = 'bar'
            cahrtTemplate[store.state.preChartType].series[item].stack = 'total'
          }
        }
    }
    function changeSize() {
        if(store.state.preChartType === 'pie')
          ElMessage.error('目前饼图只能和环形图互换哦')
        else {
          for(let item in cahrtTemplate[store.state.preChartType].series)
          {
            cahrtTemplate[store.state.preChartType].series[item].type = 'scatter'
            let dataProto = cahrtTemplate[store.state.preChartType].series[0].data[0][1] ? cahrtTemplate[store.state.preChartType].series[0].data[0][1] : cahrtTemplate[store.state.preChartType].series[0].data[0]
            cahrtTemplate[store.state.preChartType].series[item].symbolSize = function (data) {return data[1] ? data[1]/dataProto*20 : data/dataProto*20}
          }
        }
    }
    function changePie(value) {
        if(store.state.preChartType !== 'pie')
          ElMessage.error('目前饼图只能和环形图互换哦')
        else {
        cahrtTemplate[store.state.preChartType].series[0].radius = value
        if(typeof(value) === 'string'){
          cahrtTemplate[store.state.preChartType].series[0].itemStyle = {
                borderRadius: 0,
                borderColor: '#fff',
                borderWidth: 0
        }
        }
        
        else
        cahrtTemplate[store.state.preChartType].series[0].itemStyle = {
                borderRadius: 15,
                borderColor: '#fff',
                borderWidth: 2
        }
        }
    }
    /**
     * 跳转新页面
     */
    const router = useRouter();
    const { href } = router.resolve({
                path: '/blog/detail/61272f36835a78f6ba8d32d4',
            });
    function openNew() {
      window.open(href, "_blank");
    }
    
    return {
      changeType,
      addarea,
      openNew,
      addStack,
      changeSize,
      changePie
    }
  }
}
</script>

<style lang = "less" scoped> 

  p {
    margin-top: 32px;
  }
  img {
    margin-top: 10px;
    width: 90%;
    transition: 0.5s;
    cursor: pointer;
    border-radius: 5px;
    box-shadow: 1px 1px 6px 3px rgba(0, 0, 0, .3);
  }
  img:hover {
    transform: scale(1.05);
  }
  .el-divider--horizontal {
    margin: 11px 0;
  }
  i {
    cursor: pointer;
  }
</style>