var echartLR = echarts.init(document.getElementById('echart-lr'));
var labelRight = {
    position: 'right'
};
var optionlr = {
    textStyle: {
        color: '#FFBE22',
        fontFamily: 'Noto Sans'
    },
    title: {
        text: '交错正负轴标签',
        // subtext: 'From ExcelHome',
        sublink: 'http://e.weibo.com/1341556070/AjwF2AgQm',
        textStyle: {
            color: '#FFBE22'
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        textStyle: {
            color: '#FFBE22'
        }
    },
    grid: {
        top: 80,
        bottom: 30
    },
    xAxis: {
        type: 'value',
        position: 'top',
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    yAxis: {
        type: 'category',
        axisLine: {show: false},
        axisLabel: {show: false},
        axisTick: {show: true},
        splitLine: {show: false},
        data:['ten', 'nine', 'eight', 'seven', 'six', 'five', 'four', 'three', 'two', 'one']
    },
    series: [
        {
            name: '生活费',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                formatter: '{b}',
                color: '#FFBE22'
            },
            data: [
                {value: -0.07, label: labelRight},
                {value: -0.09, label: labelRight},
                0.2, 0.44,
                {value: -0.23, label: labelRight},
                0.08,
                {value: -0.17, label: labelRight},
                0.47,
                {value: -0.36, label: labelRight},
                0.18
            ]
        }
    ]
};
echartLR.setOption(optionlr);
