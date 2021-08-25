import { ref } from 'vue';



const line = ref({
    title: {
        text: '一周降雨量折线图',
    },
    legend: {
    },
    xAxis: {
        name:'星期',
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        name:'降雨量(ml)',
        type: 'value'
    },
    series: [{
        name:'六月第一周',
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line',
        smooth:false
    },{
        name:'六月第二周',
        data: [260, 240, 120, 110, 60, 0, 60],
        type: 'line',
        smooth:false
    }]
})

export {line}