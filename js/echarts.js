var myChart = echarts.init(document.getElementById('echart-normal'));
var option = {
    textStyle: {
        color: '#08CD7C',
        fontSize: 14,
        fontFamily: '微软雅黑'
    },
    title: {
        text: '温度',
        left: '5%',
        subtext: '友情链接',
        sublink: 'http://42.193.131.94/#/',
        subtarget: 'blank',
        textStyle: {
            color: '#08CD7C',
            fontWeight: 400,
            fontSize: 20,
        },
        subtextStyle: {
            color: '#08CD7C',
            fontSize: 12,
        }
    },
    legend: {
        data: ['温度'],
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
        data: ['Jan','Feb','Mar','Jun','Aug','Sep',],
        name: '月份',
        nameLocation: 'middle',
        nameGap: 25
    },
    yAxis: {
        name: 'g/cm²',
        nameLocation: 'middle',
        nameGap: 25
    },
    series: {
        name: '温度',
        type: 'bar',
        data: [10, 23, 5, 11, 6, 12]
    }
};
myChart.setOption(option);
