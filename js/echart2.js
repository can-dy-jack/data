var pieChart = echarts.init(document.getElementById('echart-nightingale'));
var pieOption = {
    textStyle: {
        color: '#5747F7'
    },
    title: {
        text: '风速',
        x: 'center',
        textStyle: {
            color: '#5747F7'
        },
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} bar: {c} ({d}%)",
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data: ['真风向', '综合风向', '风速(节)', '风速(m/s)'],
        textStyle: {
            color: '#5747F7'
        },
    },
    toolbox: {
        show: true,
        right: '5%',
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['pie', 'funnel'],
                option: {
                    funnel: {
                        x: '25%',
                        width: '50%',
                        funnelAlign: 'left',
                        max: 1548
                    }
                }
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            },
        }
    },
    calculable: true,
    series: [{
        name: '大气气压',
        type: 'pie',
        radius: '55%',
        label: {
            color: '#5747F7'
        },
        center: ['50%', '60%'],
        data: [{
            value: 3000,
            name: '真风向'
        }, {
            value: 3200,
            name: '综合风向'
        }, {
            value: 1000,
            name: '风速(节)'
        }, {
            value: 1600,
            name: '风速(m/s)'
        }]
    }]
};
pieChart.setOption(pieOption);
