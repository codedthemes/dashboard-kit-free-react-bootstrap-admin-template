const chartData = {
    height: 350,
    type: 'heatmap',
    options: {
        dataLabels: {
            enabled: false
        },
        colors: ['#7267ef'],
        title: {
            text: 'HeatMap Chart (Single color)'
        }
    },
    series: [
        {
            name: 'Metric1',
            data: generateDatasehratheat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric2',
            data: generateDatasehratheat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric3',
            data: generateDatasehratheat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric4',
            data: generateDatasehratheat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric5',
            data: generateDatasehratheat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric6',
            data: generateDatasehratheat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric7',
            data: generateDatasehratheat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric8',
            data: generateDatasehratheat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric9',
            data: generateDatasehratheat(12, {
                min: 0,
                max: 90
            })
        }
    ]
};
export default chartData;

function generateDatasehratheat(count, yrange) {
    let i = 0;
    const series = [];
    while (i < count) {
        series.push({
            x: `w${(i + 1).toString()}`,
            y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
        });
        i += 1;
    }
    return series;
}
