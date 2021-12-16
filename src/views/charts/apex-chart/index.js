import React, { useEffect, useState } from 'react';

// react-bootstrap
import { Row, Col, Card, ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

// third party
import _ from 'lodash';
import useInterval from 'react-useinterval';
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';
import lineChart1Props from './chart/line-chart-1';
import lineChart3Props from './chart/line-chart-3';
import areaChart1Props from './chart/area-chart-1';
import barChart1Props from './chart/bar-chart-1';
import barChart2Props from './chart/bar-chart-2';
import barChart3Props from './chart/bar-chart-3';
import barChart4Props from './chart/bar-chart-4';
import mixedChart1Props from './chart/mixed-chart-1';
import mixedChart2Props from './chart/mixed-chart-2';
import candlestickChartProps from './chart/candlestick-chart';
import bubbleChart1Props from './chart/bubble-chart-1';
import bubbleChart2Props from './chart/bubble-chart-2';
import scatterChart1Props from './chart/scatter-chart-1';
import scatterChart2Props from './chart/scatter-chart-2';
import heatMapChart1Props from './chart/heat-map-chart-1';
import heatMapChart2Props from './chart/heat-map-chart-2';
import pieChart1Props from './chart/pie-chart-1';
import pieChart2Props from './chart/pie-chart-2';
import radialChart1Props from './chart/radial-bar-chart-1';
import radialChart2Props from './chart/radial-bar-chart-2';
import radarChart1Props from './chart/radar-chart-1';
import radarChart2Props from './chart/radar-chart-2';
import dailyVisitorProps from './chart/daily-visitor';
import lineChartProps from './chart/line-chart';

// -----------------------|| APEX CHART ||-----------------------//
const ApexChart = () => {
    const [data, setData] = useState([]);
    const [latestDate, setLatestDate] = useState(new Date('11 Feb 2017 GMT').getTime());

    const dailyVisitorHandler = (unit) => {
        let minState;
        let maxState;
        switch (unit) {
            case '1m':
                minState = new Date('28 Jan 2013').getTime();
                maxState = new Date('27 Feb 2013').getTime();
                break;
            case '6m':
                minState = new Date('27 Sep 2012').getTime();
                maxState = new Date('27 Feb 2013').getTime();
                break;
            default:
            case '1y':
                minState = new Date('27 Feb 2012').getTime();
                maxState = new Date('27 Feb 2013').getTime();
                break;
            case 'ytd':
                minState = new Date('01 Jan 2013').getTime();
                maxState = new Date('27 Feb 2013').getTime();
                break;
            case 'all':
                minState = undefined;
                maxState = undefined;
                break;
        }

        const newDailyVisitors = {
            ...dailyVisitorProps.options,
            xaxis: {
                min: minState,
                max: maxState
            }
        };
        ApexCharts.exec(`daily-visitor`, 'updateOptions', newDailyVisitors);
    };

    const dataProvider = () => {
        const yrange = { min: 10, max: 90 };
        const newDate = latestDate + 86400000;
        const newData = {
            x: newDate,
            y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
        };

        setLatestDate(newDate);

        const latestData = [...data, newData];

        const newSeries = [
            {
                ...lineChartProps.series,
                data: latestData
            }
        ];

        setData(latestData);

        ApexCharts.exec(`line-chart`, 'updateSeries', newSeries);
    };

    useEffect(() => {
        let i = 0;
        let baseval = new Date('11 Feb 2017 GMT').getTime();
        const count = 10;
        const yrange = { min: 10, max: 90 };

        let newData = [];
        let newDate = baseval;

        while (i < count) {
            const x = baseval;
            const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

            newData = [...newData, { x, y }];
            newDate = baseval;
            baseval += 86400000;
            i += 1;
        }
        setLatestDate(newDate);
        setData(newData);
    }, [setLatestDate, setData]);

    useInterval(dataProvider, 2000, latestDate);

    const loadDailyVisitorToolbar = () => (
        <ButtonToolbar>
            <ToggleButtonGroup type="radio" name="options" defaultValue="1y">
                <ToggleButton variant="outline-primary" value="1m" size="sm" onClick={() => dailyVisitorHandler('1m')}>
                    1M
                </ToggleButton>
                <ToggleButton variant="outline-primary" value="6m" size="sm" onClick={() => dailyVisitorHandler('6m')}>
                    6M
                </ToggleButton>
                <ToggleButton variant="outline-primary" value="1y" size="sm" onClick={() => dailyVisitorHandler('1y')}>
                    1Y
                </ToggleButton>
                <ToggleButton variant="outline-primary" value="ytd" size="sm" onClick={() => dailyVisitorHandler('ytd')}>
                    YTD
                </ToggleButton>
                <ToggleButton variant="outline-primary" value="all" size="sm" onClick={() => dailyVisitorHandler('all')}>
                    All
                </ToggleButton>
            </ToggleButtonGroup>
        </ButtonToolbar>
    );

    const charts = [
        { title: 'Basic line chart', props: lineChart1Props, size: 6 },
        { title: 'Realtime Chart', props: lineChartProps, size: 6 },
        { title: 'Different line chart', props: lineChart3Props, size: 12 },
        { title: 'Area chart', props: areaChart1Props, size: 6 },
        { title: 'Area chart', props: dailyVisitorProps, size: 6, toolbar: loadDailyVisitorToolbar() },
        { title: 'Bar chart', props: barChart1Props, size: 6 },
        { title: 'Bar chart stacked', props: barChart2Props, size: 6 },
        { title: 'Bar chart horizontal', props: barChart3Props, size: 6 },
        { title: 'Bar chart horizontal stacked', props: barChart4Props, size: 6 },
        { title: 'Mixed Chart', props: mixedChart1Props, size: 6 },
        { title: 'Mixed Chart', props: mixedChart2Props, size: 6 },
        { title: 'Candlestick Chart', props: candlestickChartProps, size: 12 },
        { title: 'Bubble Chart', props: bubbleChart1Props, size: 6 },
        { title: 'Bubble Chart 3d', props: bubbleChart2Props, size: 6 },
        { title: 'Scatter Chart', props: scatterChart1Props, size: 6 },
        { title: 'Scatter Chart Datetime', props: scatterChart2Props, size: 6 },
        { title: 'Heatmap Chart', props: heatMapChart1Props, size: 6 },
        { title: 'Heatmap Chart Rounded', props: heatMapChart2Props, size: 6 },
        { title: 'Pie Chart', props: pieChart1Props, size: 6 },
        { title: 'Pie Chart donut', props: pieChart2Props, size: 6 },
        { title: 'Radial Bar Chart', props: radialChart1Props, size: 6 },
        { title: 'Radial Bar Chart Custom Angle', props: radialChart2Props, size: 6 },
        { title: 'Radar Chart', props: radarChart1Props, size: 6 },
        { title: 'Radar Chart Multiple Series', props: radarChart2Props, size: 6 }
    ];

    return (
        <Row>
            {_.map(charts, (chart) => (
                <Col md={chart.size}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">{chart.title}</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            {chart.toolbar && chart.toolbar}
                            <Chart {...chart.props} />
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default ApexChart;
