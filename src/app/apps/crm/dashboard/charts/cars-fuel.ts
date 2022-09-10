import { Chart } from "angular-highcharts";
export function carsFuel(theme: string): Chart {
  return new Chart({
    chart: {
      backgroundColor: theme === 'dark' ? '#36404A': 'white',
      type: "packedbubble",
      height: 315
    },
    credits: {
      enabled: false,
    },
    title: undefined,
    tooltip: {
      useHTML: true,
      pointFormat: "<b>{point.name}:</b> {point.y}</sub>",
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      packedbubble: {
        dataLabels: {
          enabled: true,
          format: "{point.name} {point.y}",
          style: {
            color: "black",
            textOutline: "none",
            fontWeight: "normal",
          },
        },
        minSize: 50,
        maxSize: 150  
      },
    },
    series: [
      {
        name: "Petrol",
        color: '#159E4C',
        type: 'packedbubble',
        data: [
          {
            value: 14800,
            name: "Petrol",
          }
        ],
      },
      {
        name: "Diesel",
        type: 'packedbubble',
        data: [
          {
            value: 3700,
            name: "Diesel",
          },
        ],
      },
      {
        name: "Electric",
        type: 'packedbubble',
        data: [{ value: 3800, name: "Electric" }],
      },
      {
        name: "Hybrid",
        type: 'packedbubble',
        data: [
          {
            value: 1400,
            name: "Hybrid",
          },
        ],
      },
    ],
  });
}
