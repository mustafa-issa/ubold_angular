import { Chart } from "angular-highcharts";
export const enteredCars = new Chart({
  credits: {
    enabled: false,
  },
  chart: {
      type: 'column'
  },
  title: {
      text: 'Total number of cars entered',
      align: 'left'
  },
  xAxis: {
      categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  },
  yAxis: {
      min: 0,
      title: {
          text: 'Cars'
      },
      stackLabels: {
          enabled: true,
          style: {
              fontWeight: 'bold',
              textOutline: 'none'
          }
      }
  },
  tooltip: {
      headerFormat: '<b>{point.x}</b><br/>',
      pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
  },
  plotOptions: {
      column: {
          stacking: 'normal',
          dataLabels: {
              enabled: true
          }
      }
  },
  series: [{
    name: 'EV',
    type: 'column',
    data: [13, 23, 20, 8, 13, 27, 18]
},{
      name: 'Petrol',
      type: 'column',
      data: [44, 55, 41, 67, 22, 43, 25]
  }]
});
