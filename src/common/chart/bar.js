import { ref } from 'vue';

const Bar = ref({
    title: {
      text: 'Test图表',
    },
    xAxis: {
      type: 'category',
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      name: '销量',
      type: 'bar',
      data: [18, 20, 36, 15, 10, 20],
    }]
  });

export {Bar} 