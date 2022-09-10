import { Chart } from "angular-highcharts";
export const carsFuel = new Chart({
  chart: {
    type: "packedbubble"
  },
  credits: {
    enabled: false,
  },
  title: {
    text: "Cars by Fuel Break Down",
  },
  tooltip: {
    useHTML: true,
    pointFormat: "<b>{point.name}:</b> {point.y}</sub>",
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
    },
  },
  series: [
    {
      name: "Petrol",
      color: '#159E4C',
      type: 'packedbubble',
      data: [
        {
          value: 320,
          name: "Petrol",
        }
      ],
    },
    {
      name: "Diesel",
      type: 'packedbubble',
      data: [
        {
          value: 50,
          name: "Diesel",
        },
      ],
    },
    {
      name: "Electric",
      type: 'packedbubble',
      data: [{ value: 120, name: "Electric" }],
    },
    {
      name: "Hybrid",
      type: 'packedbubble',
      data: [
        {
          value: 68,
          name: "Hybrid",
        },
      ],
    },
  ],
});
