const chartData = {
    height: 350,
    type: 'radialBar',
    options: {
        plotOptions: {
            radialBar: {
                offsetY: -30,
                startAngle: 0,
                endAngle: 270,
                hollow: {
                    margin: 5,
                    size: '30%',
                    background: 'transparent',
                    image: undefined
                },
                dataLabels: {
                    name: {
                        show: false
                    },
                    value: {
                        show: false
                    }
                }
            }
        },
        colors: ['#7267EF', '#17c666', '#ffa21d', '#EA4D4D'],
        fill: {
            type: 'solid'
        },
        labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
        legend: {
            show: true,
            floating: true,
            fontSize: '16px',
            position: 'left',
            offsetX: 0,
            offsetY: 0,
            labels: {
                useSeriesColors: true
            },
            formatter(seriesName, opts) {
                return `${seriesName}:  ${opts.w.globals.series[opts.seriesIndex]}`;
            },
            itemMargin: {
                horizontal: 1
            }
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    legend: {
                        show: false
                    }
                }
            }
        ]
    },
    series: [76, 67, 61, 90]
};
export default chartData;
