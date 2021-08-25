import { ref } from 'vue';

const scatter = ref({
    title:{
        text:'企业生产销售散点图',
    },
    legend: {
        right: '10%',
        top: '3%',
    },
    xAxis: {
        name:'生产量',
    },
    yAxis: {
        name:'销售量',
    },
    series: [
    {
        name:'企业A',
        symbolSize: 20,
        data:[[1,0.5],[1.5,1.9],[2.3,0.5],[3.5,2.1],[3.9,3.5]],
        type: 'scatter'
    },
    {
        name:'企业B',
        symbolSize: 20,
        data:[[0.6,0.7],[2,1.8],[2.8,3],[3.9,2.99],[4.5,3.2]],
        type: 'scatter'
    },
    ],
    //全体参数靠近散点后强调
    emphasis: {
            label: {
                show: true,
                formatter: function (param) {
                    return `(${param.data[0]},${param.data[1]})`;
                },
                position: 'top'
            }
    },
})

export {scatter}