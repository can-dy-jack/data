var ctx = document.getElementById('Chart2').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['html', 'css', 'js', 'bootstrap', 'jQeury', 'vue','react'],
        datasets: [{
            label: '大小',
            data: [12, 19, 8, 10, 5, 5,1],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(23,15,250,0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(23,15,250,1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['html', 'css', 'js', 'bootstrap', 'jQeury', 'vue','react'],
        datasets: [{
            label: '语言掌握程度',
            data: [12, 19, 8, 10, 5, 5,1],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(23,15,250,0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(23,15,250,1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var ctx = document.getElementById('Chart3').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
		datasets: [
		{
		label: "My First dataset",
		fillColor: "rgba(220,220,220,0.2)",
		strokeColor: "rgba(220,220,220,1)",
		pointColor: "rgba(220,220,220,1)",
		pointStrokeColor: "#fff",
		pointHighlightFill: "#fff",
		pointHighlightStroke: "rgba(220,220,220,1)",
		data: [65, 59, 90, 81, 56, 55, 40]
		},
		{
		label: "My Second dataset",
		fillColor: "rgba(151,187,205,0.2)",
		strokeColor: "rgba(151,187,205,1)",
		pointColor: "rgba(151,187,205,1)",
		pointStrokeColor: "#fff",
		pointHighlightFill: "#fff",
		pointHighlightStroke: "rgba(151,187,205,1)",
		data: [28, 48, 40, 19, 96, 27, 100]
		}
		]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var ctx = document.getElementById('Chart4').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
		datasets: [
		{
		label: "My First dataset",
		fillColor: "rgba(220,220,220,0.2)",
		strokeColor: "rgba(220,220,220,1)",
		pointColor: "rgba(220,220,220,1)",
		pointStrokeColor: "#fff",
		pointHighlightFill: "#fff",
		pointHighlightStroke: "rgba(220,220,220,1)",
		data: [65, 59, 90, 81, 56, 55, 40]
		},
		{
		label: "My Second dataset",
		fillColor: "rgba(151,187,205,0.2)",
		strokeColor: "rgba(151,187,205,1)",
		pointColor: "rgba(151,187,205,1)",
		pointStrokeColor: "#fff",
		pointHighlightFill: "#fff",
		pointHighlightStroke: "rgba(151,187,205,1)",
		data: [28, 48, 40, 19, 96, 27, 100]
		}
		]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var ctx = document.getElementById('Chart5').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
		datasets: [
		{
		label: "My First dataset",
		fillColor: "rgba(220,220,220,0.2)",
		strokeColor: "rgba(220,220,220,1)",
		pointColor: "rgba(220,220,220,1)",
		pointStrokeColor: "#fff",
		pointHighlightFill: "#fff",
		pointHighlightStroke: "rgba(220,220,220,1)",
		data: [65, 59, 90, 81, 56, 55, 40]
		},
		{
		label: "My Second dataset",
		fillColor: "rgba(151,187,205,0.2)",
		strokeColor: "rgba(151,187,205,1)",
		pointColor: "rgba(151,187,205,1)",
		pointStrokeColor: "#fff",
		pointHighlightFill: "#fff",
		pointHighlightStroke: "rgba(151,187,205,1)",
		data: [28, 48, 40, 19, 96, 27, 100]
		}
		]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
var ctx = document.getElementById('Chart6').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
		datasets: [
		{
		label: "My First dataset",
		fillColor: "rgba(220,220,220,0.2)",
		strokeColor: "rgba(220,220,220,1)",
		pointColor: "rgba(220,220,220,1)",
		pointStrokeColor: "#fff",
		pointHighlightFill: "#fff",
		pointHighlightStroke: "rgba(220,220,220,1)",
		data: [65, 59, 90, 81, 56, 55, 40]
		},
		{
		label: "My Second dataset",
		fillColor: "rgba(151,187,205,0.2)",
		strokeColor: "rgba(151,187,205,1)",
		pointColor: "rgba(151,187,205,1)",
		pointStrokeColor: "#fff",
		pointHighlightFill: "#fff",
		pointHighlightStroke: "rgba(151,187,205,1)",
		data: [28, 48, 40, 19, 96, 27, 100]
		}
		]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});