// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('echart-normal'));
// 指定图表的配置项和数据
var option = {
    title: {
        text: '温-盐-密'
    },
    tooltip: {},
    legend: {
        data:['温度','密度','盐度']
    },
    xAxis: {
        data: ['Jan','Feb','Mar','Jun','Aug','Sep']
        //"潮汐","潮流","风速","温度","盐度","密度",'风速','水深'
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
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);


// 2
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
    title: {
        left: 'center',
        text: '大数据量面积图',
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


// 3
var dom = document.getElementById("container2");
var myChart3 = echarts.init(dom);
var app = {};
var option3;
option3 = {
    dataset: {
        source: [
            ['score', 'amount', 'product'],
            [89.3, 58212, 'Matcha Latte'],
            [57.1, 78254, 'Milk Tea'],
            [74.4, 41032, 'Cheese Cocoa'],
            [50.1, 12755, 'Cheese Brownie'],
            [89.7, 20145, 'Matcha Cocoa'],
            [68.1, 79146, 'Tea'],
            [19.6, 91852, 'Orange Juice'],
            [10.6, 101852, 'Lemon Juice'],
            [32.7, 20112, 'Walnut Brownie']
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

if (option3 && typeof option3 === 'object') {
    myChart3.setOption(option3);
}