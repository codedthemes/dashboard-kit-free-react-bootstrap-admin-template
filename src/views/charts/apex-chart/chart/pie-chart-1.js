const chartData = {
    height: 320,
    type: 'pie',
    options: {
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        colors: ['#7267EF', '#17c666', '#3ec9d6', '#ffa21d', '#EA4D4D'],
        legend: {
            show: true,
            position: 'bottom'
        },
        fill: {
            type: 'solid'
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
    series: [44, 55, 13, 43, 22]
};
export default chartData;
