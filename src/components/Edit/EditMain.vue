<template>
  <div id="main"></div>
</template>

<script>
import { cahrtTemplate } from '../../common/chart/chart'
import * as echarts from 'echarts';
import { useStore } from 'vuex';
import { watch } from '@vue/runtime-core';
import essos from '../../assets/json/theme/essos.json';import infographic from '../../assets/json/theme/infographic.json';import macarons from '../../assets/json/theme/macarons.json';import roma from '../../assets/json/theme/roma.json';import vintage from '../../assets/json/theme/vintage.json';import walden from '../../assets/json/theme/walden.json';import westeros from '../../assets/json/theme/westeros.json';import wonderland from '../../assets/json/theme/wonderland.json';import chalk from '../../assets/json/theme/chalk.json';import purplePassion from '../../assets/json/theme/purple-passion.json'


export default {
  components: {  },
  setup() {
    const store = useStore()
    let chartDom,preChart
    echarts.registerTheme('essos',essos);echarts.registerTheme('westeros',westeros);echarts.registerTheme('vintage',vintage);echarts.registerTheme('infographic',infographic);echarts.registerTheme('macarons',macarons);echarts.registerTheme('roma',roma);echarts.registerTheme('walden',walden);echarts.registerTheme('wonderland',wonderland);echarts.registerTheme('chalk',chalk);echarts.registerTheme('purple-passion',purplePassion)
    
    /**
     * 监听初始类型
     */
    watch(
      ()=>store.state.preChartType,
      ()=>{
        if(document.getElementById('main'))
        {
            chartDom = document.getElementById('main')
            preChart = echarts.init(chartDom,'westeros');
            preChart.setOption(cahrtTemplate[store.state.preChartType])
            store.state.myChart = preChart
        }
    })

    /**
     *监听主题
     */
    watch(
      ()=>store.state.theme,
      ()=>{
            preChart.dispose()
            preChart = echarts.init(chartDom,store.state.theme)
            preChart.setOption(cahrtTemplate[store.state.preChartType])
            store.state.myChart = preChart
    })


    /**
     * 监听类型变换
     */
    watch(()=>cahrtTemplate[store.state.preChartType].series[0].type
    ,()=>{
      preChart.setOption(cahrtTemplate[store.state.preChartType])
      store.state.myChart = preChart
    })
    
    watch(()=>cahrtTemplate[store.state.preChartType].series[0].areaStyle
    ,()=>{
      preChart.setOption(cahrtTemplate[store.state.preChartType])
      store.state.myChart = preChart
    })
    
    watch(()=>cahrtTemplate[store.state.preChartType].series[0].stack
    ,()=>{
      preChart.setOption(cahrtTemplate[store.state.preChartType])
      store.state.myChart = preChart
    })

    watch(()=>cahrtTemplate[store.state.preChartType].series[0].symbolSize
    ,()=>{
      if(cahrtTemplate[store.state.preChartType].series[0].type === 'scatter')
      preChart.setOption(cahrtTemplate[store.state.preChartType])
      store.state.myChart = preChart
    })

    watch(()=>cahrtTemplate[store.state.preChartType].series[0].radius
    ,()=>{
      if(cahrtTemplate[store.state.preChartType].series[0].type === 'pie')
      preChart.setOption(cahrtTemplate[store.state.preChartType])
      store.state.myChart = preChart
    })



    /**
     * 以下为折线图
     */
    /**
     * 修改Title
     */
    watch(()=>store.state.preChartType,() => {
        if(store.state.preChartType === 'line'){
          watch(()=>cahrtTemplate[store.state.preChartType].title.text,
          ()=>{
            preChart.setOption(cahrtTemplate[store.state.preChartType])
            store.state.myChart = preChart
          })

          /**
           * 修改列数
           */
          watch(()=>cahrtTemplate[store.state.preChartType].xAxis.data.length,
          ()=>{
            preChart.setOption(cahrtTemplate[store.state.preChartType])
            store.state.myChart = preChart
          })
          /**
           * 修改行数
           */
          watch(()=>cahrtTemplate[store.state.preChartType].series.length,
          (v1,v2)=>{
            if(v1<v2)
            preChart.dispose(),preChart = echarts.init(chartDom,store.state.theme)//行数减少时需要重新挂载，不然图像不会变化
            preChart.setOption(cahrtTemplate[store.state.preChartType])
            store.state.myChart = preChart
          })

          /**
           * 修改数据
           */
          for(let i = 0; i < cahrtTemplate[store.state.preChartType].series.length; i++)
          watch(()=>cahrtTemplate[store.state.preChartType].series[i].data,
          ()=>{
            preChart.setOption(cahrtTemplate[store.state.preChartType])
            store.state.myChart = preChart
          })
        }
    })
    return{

    }


  }
}
</script>

<style lang = "less" scoped> 
  #main {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
  }
</style>