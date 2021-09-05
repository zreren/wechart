const pie = {
    title: {
        text: '某站点用户访问来源',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '70%',
            data: [
            {key:'0', value: 1048, name: '搜索引擎'},
            {key:'1', value: 735, name: '直接访问'},
            {key:'2', value: 580, name: '邮件营销'},
            {key:'3', value: 484, name: '联盟广告'},
            {key:'4', value: 300, name: '视频广告'}
            ]
        }
    ]
}

export {pie} 