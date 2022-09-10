import { Chart } from "angular-highcharts";
export const cEStandard = new Chart({
  chart: {
    type: "area",
  },
  title: {
    style: {
      fontSize: "13px",
    },
    text: "CO2 Emission VS EU Standard",
  },
  credits: {
    enabled: false,
  },
  xAxis: {
    categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  },
  yAxis: {
    title: {
      text: "kg.CO2/kWh",
    },
  },
  series: [
    {
      name: "Carbon",
      type: "area",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "EU",
      type: "area",
      data: [11, 32, 95, 32, 34, 52, 41],
    },
  ],
});
