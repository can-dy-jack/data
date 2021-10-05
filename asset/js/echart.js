// line
var lineChart = echarts.init(document.getElementById('echart-line'));
var lineOption = {
    textStyle: {
        color: '#FFBE22'
    },
    title: {
        text: '气温变化',
        textStyle: {
            color: '#FFBE22'
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['最高', '最低']
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
                type: ['line', 'bar']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            formatter: '{value} °C'
        }
    }],
    series: [{
        name: '最高气温',
        type: 'line',
        data: [11, 11, 15, 13, 12, 13, 10],
        markPoint: {
            data: [{
                type: 'max',
                name: '最大值'
            }, {
                type: 'min',
                name: '最小值'
            }]
        },
        markLine: {
            data: [{
                type: 'average',
                name: '平均值'
            }]
        }
    }, {
        name: '最低气温',
        type: 'line',
        data: [1, -2, 2, 5, 3, 2, 0],
        markPoint: {
            data: [{
                name: '周最低',
                value: -2,
                xAxis: 1,
                yAxis: -1.5
            }]
        },
        markLine: {
            data: [{
                type: 'average',
                name: '平均值'
            }]
        }
    }]
};
lineChart.setOption(lineOption);
// end -1

// normal
var myChart = echarts.init(document.getElementById('echart-normal'));
var option = {
    textStyle: {
        color: '#08CD7C',
        fontSize: 14,
        fontFamily: 'Noto Sans'
    },
    title: {
        text: '大气压力',
        left: '5%',
        //subtext: '友情链接',
        //sublink: 'http://42.193.131.94/#/',
        // subtarget: 'blank',
        textStyle: {
            color: '#08CD7C',
            fontWeight: 400,
            fontSize: 20,
        },
        // subtextStyle: {
        //     color: '#08CD7C',
        //     fontSize: 9,
        // }
    },
    legend: {
        data: ['大气压力'],
        right: '35%',
        top: '2%',
        textStyle: {
            color: '#08CD7C',
            fontSize: 14
        },
    },
    tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    toolbox: {
        show: true,
        feature: {
            // mark: {show:true},
            // dataView: {show: true, readOnly: false},
            magicType: {
                show: true,
                type: ['line', 'bar']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        },
        right: '5%',
        top: '1%'
    },
    grid: {
        right: '10%',
        bottom: 40,
    },
    xAxis: {
        type: 'category',
        data: [1,2,3,4,5],
        name: '月份',
        nameLocation: 'middle',
        nameGap: 25
    },
    yAxis: {
        name: '英寸汞柱',
        nameLocation: 'middle',
        nameGap: 25
    },
    series: {
        name: '大气压力',
        type: 'bar',
        data: [270.8,270.8,270.8,180.6,170.2]
    }
};
myChart.setOption(option);
// end -2

// temp
var airTemperature = echarts.init(document.getElementById('air-temperature'));
var optionat = {
    tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
    },
    series: [{
        name: 'temperature',
        type: 'gauge',
        detail: {
            formatter: '{value}'
        },
        data: [{
            value: 21.4,
            name: '温度'
        }]
    }]
};
airTemperature.setOption(optionat);
// end -3

// nightingale
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
// end -4

