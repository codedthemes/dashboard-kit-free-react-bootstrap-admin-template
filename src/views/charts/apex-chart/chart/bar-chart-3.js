const chartData = {
    height: 350,
    type: 'bar',
    options: {
        plotOptions: {
            bar: {
                horizontal: true,
                dataLabels: {
                    position: 'top'
                }
            }
        },
        colors: ['#7267EF', '#17c666'],
        dataLabels: {
            enabled: true,
            offsetX: -6,
            style: {
                fontSize: '12px',
                colors: ['#fff']
            }
        },
        stroke: {
            show: true,
            width: 1,
            colors: ['#fff']
        },
        fill: {
            type: 'solid'
        },
        xaxis: {
            categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007]
        }
    },
    series: [
        {
            data: [44, 55, 41, 64, 22, 43, 21]
        },
        {
            data: [53, 32, 33, 52, 13, 44, 32]
        }
    ]
};
export default chartData;
