const chartData = {
    height: 260,
    //  type: 'pie',
    options: {
        labels: ['extremely Satisfied', 'Satisfied', 'Poor', 'Very Poor'],
        legend: {
            show: true,
            offsetY: 50
        },
        dataLabels: {
            enabled: true,
            dropShadow: {
                enabled: false
            }
        },
        theme: {
            monochrome: {
                enabled: true,
                color: '#7267EF'
            }
        },
        responsive: [
            {
                breakpoint: 768,
                options: {
                    chart: {
                        height: 320
                    },
                    legend: {
                        position: 'bottom',
                        offsetY: 0
                    }
                }
            }
        ]
    },
    series: [66, 50, 40, 30]
};
export default chartData;
