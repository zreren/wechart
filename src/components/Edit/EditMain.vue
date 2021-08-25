<template>
  <div id="main"></div>
</template>

<script>
import { cahrtTemplate } from '../../common/chart/chart'
import * as echarts from 'echarts';
import { useStore } from 'vuex';
import { watch } from '@vue/runtime-core';
import westeros from '../../assets/json/theme/westeros.json'
export default {
  components: {  },
  setup() {
    const store = useStore()
    let chartDom,preChart
    watch(
      ()=>store.state.preChartType,
      ()=>{
        if(document.getElementById('main','macarons'))
        {
            console.log(westeros)
            echarts.registerTheme('westeros', westeros)
            chartDom = document.getElementById('main')
            preChart = echarts.init(chartDom,'westeros');
            preChart.setOption(cahrtTemplate[store.state.preChartType])
            store.state.myChart = preChart
            console.log(cahrtTemplate[store.state.preChartType].series[0].data[1])
        }
    })

    return{

    }


  }
}
</script>

<style lang = "less" scoped> 
  #main {
    height: 100%;
    width: 95%;
  }
</style>