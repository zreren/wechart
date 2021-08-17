<template>
    <label for="视频广告">视频广告</label>
    <input type="text" v-model="options.series[0].data[0].value" name="视频广告">
    <div id="pie" class="myCharts"></div>
</template>

<script>
import { ref,onMounted,watch} from 'vue'
import * as echarts from 'echarts'
export default {
 setup() {
    const options = ref({
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius: '55%',
                roseType: 'angle',
                data:[
                    {value:235, name:'视频广告'},
                    {value:274, name:'联盟广告'},
                    {value:310, name:'邮件营销'},
                    {value:335, name:'直接访问'},
                    {value:400, name:'搜索引擎'}
                ]
            }
        ],
        backgroundColor: '#2c343c'
        })
    let myChart
    function drawChart() {
      myChart = echarts.init(document.getElementById('pie'));
      myChart.setOption(options.value);
    }
    onMounted(() => {
      drawChart();
    })
    watch(() => options.value.series[0].data[0].value, () => {
      myChart.setOption(options.value);
    });
    return {
      options
    }
 }  
}
</script>

<style scoped>
    .myCharts {
        width: 600px;
        height:600px;
        background: whitesmoke;
    }
</style>