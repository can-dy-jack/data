var myChart = echarts.init(document.getElementById('echart-normal'));
var option = {
    title: {
        text: '温-盐-密',
        left: '5%',
        subtext: '友情链接',
        sublink: 'http://42.193.131.94/#/',
        subtarget: 'blank',
        textStyle: {
            color: 'rgb(0, 145, 234)',
            fontWeight: 500,
            fontSize: 20,
        },
        subtextStyle: {
            color: 'rgb(0, 145, 234)'
        }
    },
    legend: {
        data:['温度','密度','盐度'],
        right: '5%',
        top: '2%',
        textStyle: {
            color: 'rgb(0,110,220)',
            fontSize: 14
        },
    },
    tooltip: {
        show: true
    },
    grid:{
        right: '10%',
        bottom: 40,
    },
    xAxis: {
        type: 'category',
        data: [{
            value: 'Jan',
            textStyle: {
                color: 'rgb(0, 145, 234)'
            }
        },
        {
            value: 'Feb',
            textStyle: {
                color: 'rgb(0, 145, 234)'
            }
        },
        {
            value: 'Mar',
            textStyle: {
                color: 'rgb(0, 145, 234)'
            }
        },
        {
            value: 'Jun',
            textStyle: {
                color: 'rgb(0, 145, 234)'
            }
        },
        {
            value: 'Aug',
            textStyle: {
                color: 'rgb(0, 145, 234)'
            }
        },
        {
            value: 'Sep',
            textStyle: {
                color: 'rgb(0, 145, 234)'
            }
        }],
        name: '日期',
        nameTextStyle: {
            color: 'rgb(0, 145, 234)'
        }
    },
    yAxis: {},
    series: [{
        name: '温度',
        type: 'bar',
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
            {"name":'表层',"value":23,},
            {"name":'中层',"value":15},
            {"name":'深层',"value":9},
        ]
    }
    ]
};
myChart.setOption(option);

// export { , }
//"潮汐","潮流","风速","温度","盐度","密度",'风速','水深'
//'潮汐的调和常数','潮流的调和常数'
