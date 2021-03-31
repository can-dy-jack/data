var myChart = echarts.init(document.getElementById('echart-normal'));
var option = {
    title: {
        text: '温-盐-密'
    },
    tooltip: {},
    grid:{
        left: '10%',
        right: '10%',
        top: 80,
        bottom: 60
    },
    legend: {
        data:['温度','密度','盐度']
    },
    xAxis: {
        data: ['Jan','Feb','Mar','Jun','Aug','Sep']
        //"潮汐","潮流","风速","温度","盐度","密度",'风速','水深'
        //'潮汐的调和常数','潮流的调和常数'
    },
    yAxis: {},
    series: [{
        name: '温度',
        type: 'bar',
        // line（折线图）、bar（柱状图）、pie（饼图）、scatter（散点图）、graph（关系图）、tree（树图）、...
        data: [10, 23, 5,11, 6,12]
    },{
        name: '密度',
        type: 'line',
        data: [5, 20, 26, 10, 10,12]
    },{
        type: 'pie',
        name: '盐度',
        center: ['70%',110],
        radius: 35,
        data:[
            {"name":'表层',"value":23},
            {"name":'中层',"value":15},
            {"name":'深层',"value":9},
        ]
    }
    ]
};
myChart.setOption(option);

// echart-nightingale
var echartNg = echarts.init(document.getElementById('echart-nightingale'));
var optionNG;
var colorTest;
var appNG = {};
optionNG = {
    title: {
        text: '四大洋',
        left: 'center'
    },
    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series : [
        {
            name: '饼图',
            type: 'pie',
            radius: '50%',
            data:[
                {value:274, name:'太平洋'},
                {value:310, name:'大西洋'},
                {value:335, name:'印度洋'},
                {value:400, name:'北冰洋'}
            ],
            roseType: 'angle',
            itemStyle: {
                normal: {
                    color: '#c23531'
                }
            }
        }
    ]
};
if (optionNG && typeof optionNG === 'object') {
    echartNg.setOption(optionNG);
}

// echart-reverse
var chartEr = echarts.init(document.getElementById("echart-reverse"));
var app = {};
var optionEr;
optionEr = {
    dataset: {
        source: [
            ['score', 'amount', 'product'],
            [89.3, 582, 'Matcha Latte'],
            [57.1, 782, 'Milk Tea'],
            [74.4, 410, 'Cheese Cocoa'],
            [50.1, 127, 'Cheese Brownie'],
            [89.7, 201, 'Matcha Cocoa'],
            [68.1, 791, 'Tea'],
            [19.6, 918, 'Orange Juice'],
            [10.6, 101, 'Lemon Juice'],
            [32.7, 201, 'Walnut Brownie']
        ]
    },
    grid: {containLabel: true},
    xAxis: {name: 'amount'},
    yAxis: {type: 'category'},
    visualMap: {
        orient: 'horizontal',
        left: 'center',
        min: 10,
        max: 100,
        text: ['High Score', 'Low Score'],
        // Map the score column to color
        dimension: 0,
        inRange: {
            color: ['#65B581', '#FFCE34', '#FD665F']
        }
    },
    series: [
        {
            type: 'bar',
            encode: {
                // Map the "amount" column to X axis.
                x: 'amount',
                // Map the "product" column to Y axis
                y: 'product'
            }
        }
    ]
};
if (optionEr && typeof optionEr === 'object') {
    chartEr.setOption(optionEr);
}


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


// 5
var chartData = echarts.init(document.getElementById("echart-data"));
var app = {};
var optionData;
optionData = {
    color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '5%',
        right: '5%',
        bottom: '5%',
        top: 50,
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: 'Line 1',
            type: 'line',
            stack: '总量',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(128, 255, 165)'
                }, {
                    offset: 1,
                    color: 'rgba(1, 191, 236)'
                }])
            },
            emphasis: {
                focus: 'series'
            },
            data: [140, 232, 101, 264, 90, 340, 250]
        },
        {
            name: 'Line 2',
            type: 'line',
            stack: '总量',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 221, 255)'
                }, {
                    offset: 1,
                    color: 'rgba(77, 119, 255)'
                }])
            },
            emphasis: {
                focus: 'series'
            },
            data: [120, 282, 111, 234, 220, 340, 310]
        },
        {
            name: 'Line 3',
            type: 'line',
            stack: '总量',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(55, 162, 255)'
                }, {
                    offset: 1,
                    color: 'rgba(116, 21, 219)'
                }])
            },
            emphasis: {
                focus: 'series'
            },
            data: [320, 132, 201, 334, 190, 130, 220]
        },
        {
            name: 'Line 4',
            type: 'line',
            stack: '总量',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(255, 0, 135)'
                }, {
                    offset: 1,
                    color: 'rgba(135, 0, 157)'
                }])
            },
            emphasis: {
                focus: 'series'
            },
            data: [220, 402, 231, 134, 190, 230, 120]
        },
        {
            name: 'Line 5',
            type: 'line',
            stack: '总量',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            label: {
                show: true,
                position: 'top'
            },
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(255, 191, 0)'
                }, {
                    offset: 1,
                    color: 'rgba(224, 62, 76)'
                }])
            },
            emphasis: {
                focus: 'series'
            },
            data: [220, 302, 181, 234, 210, 290, 150]
        }
    ]
};
chartData.setOption(optionData);
