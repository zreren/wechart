<template>
  <div id="main"></div>
</template>

<script>
import { Bar } from '../../common/chart/bar.js'
import * as echarts from 'echarts';
import { useStore } from 'vuex';
import { watch } from '@vue/runtime-core';
import theme from '../../assets/json/theme.json'
export default {
  components: {  },
  setup() {
    const store = useStore()
    const bar = Bar
    watch(
      ()=>store.state.preChartType,
      ()=>{
        if(document.getElementById('main','macarons'))
        {
            echarts.registerTheme('westeros', theme)
            let chartDom = document.getElementById('main')
            store.state.myChart = echarts.init(chartDom,'westeros');
            if(store.state.preChartType == 'bar')
            {
              store.state.myChart.setOption(Bar.value)
            }
            else
            {
              console.log('s')
            }
        }
    })
    return{
      bar
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