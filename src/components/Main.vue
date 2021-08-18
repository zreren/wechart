<template>
    <div class="test">
        <label for="T恤数量">T恤数量</label>
        <input type="text" v-model="options.series[0].data[0]" name="T恤数量">
        <div id="chart" class="myCharts"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts';
import { onMounted, watch, ref } from 'vue';

export default {
  setup() {
    const options = ref({
        toolbox: {
          show: true,
          feature: {
          magicType: {
            type: ["line", "bar"]
          },
            saveAsImage: {}
          }
        },
        title: {
          text: 'Test图表',
        },
        tooltip: {},
        legend: {
          data: ['销量'],
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [null, 20, 36, 10, 10, 20],
        }],
        color:['#49583f']
      });
    let myChart;
    function drawChart() {
      myChart = echarts.init(document.getElementById('chart'));
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(options.value);
    }
    onMounted(() => {
      drawChart();
    });
    watch(() => options.value.series[0].data[0], () => {
      console.log(myChart)
      myChart.setOption(options.value);
    });
    return {
      options
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
