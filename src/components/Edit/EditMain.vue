<template>
  <div id="main" style="width: 600px;height:400px;"></div>
</template>

<script>
import { Bar } from '../../common/chart/bar.js'
import * as echarts from 'echarts';
import { useStore } from 'vuex';
import { watch } from '@vue/runtime-core';

export default {
  components: {  },
  setup() {
    const store = useStore()
    const bar = Bar
    watch(
      ()=>store.state.preChartType,
      ()=>{
        if(document.getElementById('main'))
        {
            let chartDom = document.getElementById('main')
            let myChart = echarts.init(chartDom);
            if(store.state.preChartType == 'bar')
            {
              console.log(Bar.value)
              myChart.setOption(Bar.value) 
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

</style>