const chartData = {
    height: 350,
    type: 'bubble',
    options: {
        dataLabels: {
            enabled: false
        },
        fill: {
            type: 'gradient'
        },
        colors: ['#7267ef', '#17c666', '#ffa21d', '#ea4d4d'],
        title: {
            text: '3D Bubble Chart'
        },
        xaxis: {
            tickAmount: 12,
            type: 'datetime',

            labels: {
                rotate: 0
            }
        },
        yaxis: {
            max: 70
        },
        theme: {
            palette: 'palette2'
        }
    },
    series: [
        {
            name: 'Product1',
            data: generateDatasehratheatbubble3d(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'Product2',
            data: generateDatasehratheatbubble3d(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'Product3',
            data: generateDatasehratheatbubble3d(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'Product4',
            data: generateDatasehratheatbubble3d(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        }
    ]
};
export default chartData;

function generateDatasehratheatbubble3d(baseval, count, yrange) {
    let i = 0;
    const series = [];
    while (i < count) {
        const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        const z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

        series.push([baseval, y, z]);
        baseval += 86400000;
        i += 1;
    }
    return series;
}
