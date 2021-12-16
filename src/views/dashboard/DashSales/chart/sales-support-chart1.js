const chartData = {
    height: 85,
    type: 'bar',
    options: {
        chart: {
            sparkline: {
                enabled: true
            }
        },
        colors: ['#7267EF'],
        plotOptions: {
            bar: {
                columnWidth: '70%'
            }
        },
        xaxis: {
            crosshairs: {
                width: 1
            }
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter() {
                        return '';
                    }
                }
            },
            marker: {
                show: false
            }
        }
    },
    series: [
        {
            data: [
                25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 25, 44, 12, 36, 9, 54
            ]
        }
    ]
};
export default chartData;
