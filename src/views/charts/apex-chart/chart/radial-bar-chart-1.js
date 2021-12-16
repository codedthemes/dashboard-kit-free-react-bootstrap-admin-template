const chartData = {
    height: 350,
    type: 'radialBar',
    options: {
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '60%'
                }
            }
        },
        colors: ['#7267EF'],
        fill: {
            type: 'solid'
        },
        labels: ['Cricket']
    },
    series: [60]
};
export default chartData;
