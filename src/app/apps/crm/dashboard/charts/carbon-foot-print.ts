import { Chart } from "angular-highcharts";
export const carbonFootPrint = new Chart({
    credits: {
        enabled: false,
      },
    chart: {
        type: 'column'
    },
    title: {
        text: 'Carbon Foot print'
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Cars'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Population in 2021: <b>{point.y:.1f} millions</b>'
    },
    series: [{
        name: 'Population',
        type: 'column',
        data: [
            ['Sun', 680],
            ['Mon', 1420],
            ['Tue', 1050],
            ['Wed', 1360],
            ['Thu', 990],
            ['Fri', 420],
            ['Sat', 870]
        ],
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y}',
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
});
