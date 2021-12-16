const chartData = {
    height: 300,
    type: 'line',
    options: {
        chart: {
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: [5, 7, 5],
            curve: 'straight',
            dashArray: [0, 8, 5]
        },
        colors: ['#17c666', '#ffa21d', '#ea4d4d'],
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light'
            }
        },
        title: {
            text: 'Page Statistics',
            align: 'left'
        },
        markers: {
            size: 0,

            hover: {
                sizeOffset: 6
            }
        },
        xaxis: {
            categories: [
                '01 Jan',
                '02 Jan',
                '03 Jan',
                '04 Jan',
                '05 Jan',
                '06 Jan',
                '07 Jan',
                '08 Jan',
                '09 Jan',
                '10 Jan',
                '11 Jan',
                '12 Jan'
            ]
        },
        tooltip: {
            y: [
                {
                    title: {
                        formatter(val) {
                            return `${val} (mins)`;
                        }
                    }
                },
                {
                    title: {
                        formatter(val) {
                            return `${val} per session`;
                        }
                    }
                },
                {
                    title: {
                        formatter(val) {
                            return val;
                        }
                    }
                }
            ]
        },
        grid: {
            borderColor: '#f1f1f1'
        }
    },
    series: [
        {
            name: 'Session Duration',
            data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
        },
        {
            name: 'Page Views',
            data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
        },
        {
            name: 'Total Visits',
            data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
        }
    ]
};
export default chartData;
