var pieChart = echarts.init(document.getElementById('echart-nightingale'));
var pieOption = {
    title: {
        text: '家庭支出',
        subtext: '虚构图表',
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data: ['日常开支', '投资理财', '奢侈消费', '子女教育', '家庭备用金']
    },
    toolbox: {
        show: true,
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
            }
        }
    },
    calculable: true,
    series: [{
        name: '支出类型',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: [{
            value: 3000,
            name: '日常开支'
        }, {
            value: 3200,
            name: '投资理财'
        }, {
            value: 1000,
            name: '奢侈消费'
        }, {
            value: 1600,
            name: '子女教育'
        }, {
            value: 1600,
            name: '家庭备用金'
        }]
    }]
};
// 为echarts对象加载数据
pieChart.setOption(pieOption);