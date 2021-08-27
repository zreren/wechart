import { reactive }  from 'vue'

import { bar } from './all/bar'
import { line } from './all/line'
import { scatter } from './all/scatter'
import { pie } from './all/pie'

const cahrtTemplate = reactive({
    bar: bar.value,
    line: line.value,
    scatter: scatter.value,
    pie: pie.value,
    other: {
        title: {
            text: '一周降雨量折线图',
        },
        legend: {
        },
        xAxis: {
            name:'',
            type: '',
            data: []
        },
        yAxis: {
            name:'',
            type: ''
        },
        series: [{
            name:'',
            data: [],
            type: ''
        }]
    }
})


export {cahrtTemplate}