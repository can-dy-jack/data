var ctxBar = document.getElementById('chart-bar').getContext('2d');
var chartBar = new Chart(ctxBar, {
    type: 'bar',
    data: {
        labels: ['2015', '2016', '2017', '2018', '2019'],
        datasets: [{
            label: '海洋生产总值（亿元）',
            data: [65534, 69694, 76749, 83415, 89415],
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)'
                //'rgba(255, 159, 64, 0.6)'
            ]
        }]
    }
});

var ctxLine = document.getElementById('chart-line');
var chartLine = new Chart(ctxLine, {
    type: 'line',
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
                label: "s",
                fillColor: "rgba(54, 162, 235, 0.6)",
                strokeColor: "rgba(54, 162, 235, 1)",
                pointColor: "rgba(54, 162, 235,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(54, 162, 235,1)",
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: "v",
                fillColor: "rgba(75, 192, 192, 0.6)",
                strokeColor: "rgba(75, 192, 192,1)",
                pointColor: "rgba(75, 192, 192,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(75, 192, 192,1)",
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    }
});
