import { Chart } from "angular-highcharts";
export const dailyCarBrandName = new Chart({
  credits: {
    enabled: false,
  },
  chart: {
    height: '50%',
    marginTop: 10,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    plotShadow: false,
    borderWidth: 0,
    plotBorderWidth: 0,
    type: "pie",
    options3d: {
      enabled: true,
      alpha: 45,
      beta: 0,
    },
  },
  title: {
    text: "Daily Car Brand Name",
    style: {
      fontSize: "10",
    },
  },
  accessibility: {
    point: {
      valueSuffix: "%",
    },
  },
  tooltip: {
    pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    style: {
      padding: '0',
      width: 0,
      height: 0,
    },
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: "pointer",
      depth: 35,
      dataLabels: {
        enabled: true,
        format: "{point.name}",
      },
    }
  },
  legend: {
    enabled:false
  },
  series: [
    {
      type: "pie",
      name: "Share",
      data: [
        ["Toyota", 560],
        ["Nissan", 450],
        ["Mercedes", 320],
        ["BMW", 255],
        ["Others", 700],
      ],
    },
  ],
});
