import { reactive }  from 'vue'

import { bar } from './all/bar'
import { line } from './all/line'
import { scatter } from './all/scatter'
import { pie } from './all/pie'

//深拷贝
function deepClone(o) {
    if(o === null) return o
    if (Array.isArray(o)) { 
        let _arr = []
        o.forEach(item => {
            if(typeof(item) === 'object')
            _arr.push(deepClone(item))
            else
            _arr.push(item) 
        })
        return _arr
    } 
    if (typeof(o) === 'object') {
        let _o = {}
        for (let key in o) {
            _o[key] = deepClone(o[key])
        }
        return _o
    }
    return o
}


const cahrtTemplate = reactive({
    bar: deepClone(bar),
    line: deepClone(line),
    scatter: deepClone(scatter),
    pie: deepClone(pie),
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