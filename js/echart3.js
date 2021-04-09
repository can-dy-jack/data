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
