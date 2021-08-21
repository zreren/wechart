import { ref } from 'vue';

const Bar = ref({
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
      data: [18, 20, 36, 10, 10, 20],
    }],
    color:['#a6d2e5']
  });

export {Bar} 