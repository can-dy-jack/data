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
