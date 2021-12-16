const chartData = {
    height: 320,
    type: 'donut',
    options: {
        colors: ['#7267EF', '#17c666', '#3ec9d6', '#ffa21d', '#EA4D4D'],
        fill: {
            type: 'solid'
        },
        legend: {
            show: true,
            position: 'bottom'
        },
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        name: {
                            show: true
                        },
                        value: {
                            show: true
                        }
                    }
                }
            }
        },
        dataLabels: {
            enabled: true,
            dropShadow: {
                enabled: false
            }
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        ]
    },
    series: [44, 55, 41, 17, 15]
};
export default chartData;
