// 4
var myChart2 = echarts.init(document.getElementById("echart-axis"));
var app = {};
var option2;
var base = +new Date(2008, 1, 1);
var oneDay = 24 * 3600 * 1000;
var data = [[base, Math.random() * 300]];

for (var i = 1; i < 5000; i++) {
    var now = new Date(base += oneDay);
    data.push([
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
        Math.round((Math.random() - 0.5) * 20 + data[i - 1][1])
    ]);
}

option2 = {
    tooltip: {
        trigger: 'axis',
        position: function (pt) {
            return [pt[0], '10%'];
        }
    },
    toolbox: {
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'time',
        boundaryGap: false
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%']
    },
    dataZoom: [{
        type: 'inside',
        start: 0,
        end: 10
    }, {
        start: 0,
        end: 10
    }],
    series: [
        {
            name: '模拟数据',
            type: 'line',
            smooth: true,
            symbol: 'none',
            areaStyle: {},
            data: data
        }
    ]
};

if (option2 && typeof option2 === 'object') {
    myChart2.setOption(option2);
}
