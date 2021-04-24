var airTemperature = echarts.init(document.getElementById('air-temperature'));
var optionat = {
    tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
    },
    series: [{
        name: 'Pressure',
        type: 'gauge',
        detail: {
            formatter: '{value}'
        },
        data: [{
            value: 50,
            name: '温度'
        }]
    }]
};
airTemperature.setOption(optionat);
