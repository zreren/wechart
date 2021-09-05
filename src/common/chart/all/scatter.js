const scatter = {
    title:{
        text:'企业生产销售散点图',
    },
    legend: {
        right: '10%',
        top: '3%',
    },
    xAxis: {
        name:'生产量',
        scale: true
    },
    yAxis: {
        name:'销售量',
        scale: true
    },    
    series: [
    {
        name:'企业A',
        symbolSize: 15,
        data:[[11,9.5],[15.5,11.9],[20.3,20.5],[33.5,32.1],[38.9,37.5]],
        type: 'scatter'
    },
    {
        name:'企业B',
        symbolSize: 15,
        data:[[8.6,7.7],[12,11.8],[22.8,20],[33.9,32.99],[44.5,43.2]],
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
}

export {scatter}