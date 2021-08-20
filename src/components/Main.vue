<template>
    <div class="test">
        <label for="T恤数量">T恤数量</label>
        <input type="text" v-model="Bar.series[0].data[0]" name="T恤数量">
        <div id="chart" class="myCharts"></div>
    </div> 
</template>

<script>
import * as echarts from 'echarts';
import { onMounted, watch} from 'vue';
import { Bar }  from '../common/chart/bar'

export default {
  setup() {
    let myChart;
    function drawChart() {
      myChart = echarts.init(document.getElementById('chart'));
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(Bar.value);
    }
    onMounted(() => {
      drawChart();
    });
    watch(() => Bar.value.series[0].data[0], () => {
      console.log(myChart)
      myChart.setOption(Bar.value);
    });
    return {
      Bar
    };
  },
};
</script>

<style scoped>
    .myCharts {
        width: 600px;
        height:400px;
    }
</style>
