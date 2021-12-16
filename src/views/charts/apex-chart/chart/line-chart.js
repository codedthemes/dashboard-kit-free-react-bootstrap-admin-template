const chartData = {
    height: 300,
    type: 'area',
    options: {
        chart: {
            id: 'line-chart',
            animations: {
                enabled: true,
                easing: 'linear',
                dynamicAnimation: {
                    speed: 2000
                }
            },
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        colors: ['#7267ef'],
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                type: 'horizontal',
                opacityFrom: 0.8,
                opacityTo: 0,
                stops: [0, 100]
            }
        },
        markers: {
            size: 0
        },
        xaxis: {
            type: 'datetime',
            range: 777600000
        },
        yaxis: {
            max: 100
        },
        legend: {
            show: false
        }
    },
    series: [
        {
            name: 'active Users :',
            data: []
        }
    ]
};
export default chartData;
