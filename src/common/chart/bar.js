import { ref } from 'vue';

const Bar = ref({

    title: {
      text: '商场销量柱状图',
    },
    xAxis: {
      type: 'category',
      name:'',
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
    },
    yAxis: {
      name:'件',
      type: 'value'
    },
    series: [{
      name: '销量',
      type: 'bar',
      data: [18, 20, 36, 15, 10, 20],
    }]
  });

export {Bar} 