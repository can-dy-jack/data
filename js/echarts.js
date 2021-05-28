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
