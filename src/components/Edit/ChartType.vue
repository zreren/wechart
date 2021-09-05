<template>
    <div class="p">
    <div>折线图</div>
    <el-popover placement="right" title="line" :width="300" trigger="hover" content="线图常用来观察资料在一段时间之内的变化（时间序列），因此其X轴为时间，这种折线图又称为趋势图。">
    <template #reference>
      <div>
      <img style="width:18px;" src="https://sf1-ttcdn-tos.pstatp.com/obj/larkcloud-file-storage/baas/qc5abu/6bbe2504e5fe9f5f_1630074484510.png" alt="" srcset="">
      </div>
    </template>
    </el-popover>
   </div> 
   <el-divider></el-divider>
   <img class="box" @click="changeType('line')" src="https://sf1-ttcdn-tos.pstatp.com/obj/larkcloud-file-storage/baas/qc5abu/d8c7500afbc28dff_1629997461526.png" alt="">
   <img class="box" @click="addarea()" src="https://sf1-ttcdn-tos.pstatp.com/obj/larkcloud-file-storage/baas/qc5abu/ab8a0479dd66e0e1_1630002625952.png" alt="">
   <div class="p">
     <div>柱状图</div> 
    <el-popover placement="right" title="line" :width="300" trigger="hover" content="是一种以长方形的长度为变量的统计图表。柱形图用来比较两个或以上的价值（不同时间或者不同条件）">
    <template #reference>
      <div>
      <img style="width:18px;" src="https://sf1-ttcdn-tos.pstatp.com/obj/larkcloud-file-storage/baas/qc5abu/6bbe2504e5fe9f5f_1630074484510.png" alt="" srcset="">
      </div>
    </template>
    </el-popover>
    </div> 
   <el-divider></el-divider>
   <img class="box" @click="changeType('bar')" src="https://sf1-ttcdn-tos.pstatp.com/obj/larkcloud-file-storage/baas/qc5abu/b63a4a4f30d4e597_1630004043524.png" alt="">
   <img class="box" @click="addStack()" src="https://sf1-ttcdn-tos.pstatp.com/obj/larkcloud-file-storage/baas/qc5abu/a819d49b3fc19d84_1630048437112.png" alt="">
   
   <div class="p">
     <div>散点图(不建议与其他类型交换)</div> 
     <el-popover placement="right" title="line" :width="300" trigger="hover" content="散布图可以推测两个参数中许多不同种类的相关性，配合一定的置信区间。以体重及身高为例，可能会将体重放在y轴，将身高放在x轴。相关性可能是正相关、负相关、无相关性。若散布图有从左下到右上分布的图形，表示两者正相关，若散布图有从左上到右下分布的图形，表示两者负相关。">
    <template #reference>
      <div>
      <img style="width:18px;" src="https://sf1-ttcdn-tos.pstatp.com/obj/larkcloud-file-storage/baas/qc5abu/6bbe2504e5fe9f5f_1630074484510.png" alt="" srcset="">
      </div>
    </template>
    </el-popover>
     </div> 
   <el-divider></el-divider>
   <img class="box" @click="changeType('scatter')" src="https://sf1-ttcdn-tos.pstatp.com/obj/larkcloud-file-storage/baas/qc5abu/0776ceba190eb4de_1630050870509.png" alt="">
   <img class="box" @click="changeSize()" src="https://sf1-ttcdn-tos.pstatp.com/obj/larkcloud-file-storage/baas/qc5abu/421fa5087349c439_1630053107172.png" alt="">

    <div class="p">
    <div>饼图(不建议与其他类型交换)</div>
    <el-popover placement="right" title="line" :width="300" trigger="hover" content="在饼图中的每个数据系列具有唯一的颜色或图案并且在图表的图例中表示，可以很好地帮助用户快速了解数据的占比分配">
    <template #reference>
      <div>
      <img style="width:18px;" src="https://sf1-ttcdn-tos.pstatp.com/obj/larkcloud-file-storage/baas/qc5abu/6bbe2504e5fe9f5f_1630074484510.png" alt="" srcset="">
      </div>
    </template>
    </el-popover>
     </div> 
   <el-divider></el-divider>
   <img class="box" @click="changePie('70%')" src="https://sf1-ttcdn-tos.pstatp.com/obj/larkcloud-file-storage/baas/qc5abu/1a787c1712bf1cac_1630055252792.png" alt="">
   <img class="box" @click="changePie(['30%','70%'])" src="https://sf1-ttcdn-tos.pstatp.com/obj/larkcloud-file-storage/baas/qc5abu/91e025d56fcd5b52_1630055256279.png" alt="">
</template>

<script>
import { cahrtTemplate }  from '../../common/chart/chart'
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
    return {
      changeType,
      addarea,
      addStack,
      changeSize,
      changePie
    }
  }
}
</script>

<style lang = "less" scoped> 

  .p {
    display: flex;
    justify-content: space-between;
    padding:0 15px;
    margin-top: 32px;
    img {
      transform: translateY(2px);
    }
  }
  .box {
    margin-top: 10px;
    width: 90%;
    transition: 0.5s;
    cursor: pointer;
    border-radius: 5px;
    box-shadow: 1px 1px 6px 3px rgba(0, 0, 0, .3);
  }
  .box:hover {
    transform: scale(1.05);
  }
  .el-divider--horizontal {
    margin: 11px 0;
  }
</style>