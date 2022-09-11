import { Component, OnInit } from "@angular/core";
import { Chart } from "angular-highcharts";

@Component({
  selector: "app-crm-energy",
  templateUrl: "./energy.component.html",
  styleUrls: ["./energy.component.scss"],
})
export class EnergyComponent implements OnInit {
  faults : any [] = [];
  assets : any [] = [];
  lineChartOptions: any;
  barChartOptions1 : any;

  euiOptions : any;
  cuiOptions: any;
  singleAreaChartOptions: any;

  constructor() {}

  ngOnInit(): void {
    this.initLineChart();
    this.initBarChartOptions1();
    this.initEuiOptions();
    this.initCuiOptions();
    this.initSingleAreaChartOptions();

      this.faults =  [
        {
        name: 'Building 2',
        alarms: 
        {
          critical : '2', 
          minor : '14', 
          normal: '60'

        },
        buildingCapacity: {
          electricity: 70,
          cooling: 55
        },
        occupancy: {
          count: 860,
          percantage: 70
        }
      }, 
      {
        name: 'Building 2',
        alarms: 
        {
          critical : '15', 
          minor : '15', 
          normal: '15'

        },
        buildingCapacity: {
          electricity: 57,
          cooling: 90
        },
        occupancy: {
          count: 860,
          percantage: 70
        }
      },]

      this.assets = [
        {
        name: 'Booster Pump',
        runTime: 22,
        fault: 10,
        capacity: 75
      },
      {
        name: 'Cooling Pump',
        runTime: 13,
        fault: 12,
        capacity: 12
      }]

  }








  cEStandard = new Chart({
    chart: {
      type: "area",
    },
    title: {
      text: "CO2 Emission VS EU Standard",
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      allowDecimals: false,
      accessibility: {
        rangeDescription: "Range: 1940 to 2017.",
      },
    },
    yAxis: {
      title: {
        text: "Nuclear weapon states",
      },
    },
    tooltip: {
      pointFormat:
        "{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}",
    },
    plotOptions: {
      series: {
        tooltip: {
        
        }
      },
      area: {
        marker: {
          enabled: false,
          symbol: "circle",
          radius: 2,
          states: {
            hover: {
              enabled: true,
            },
          },
        },
      },
    },
    series: [{
      name: 'Carbon',
      type: 'area',
      data: [31, 40, 28, 51, 42, 109, 100]
  }, {
      name: 'EU',
      type: 'area',
      data: [11, 32, 95, 32, 34, 52, 41]
  }]
  });
  chart2 = new Chart({
    chart: {
      type: "line",
    },
    title: {
      text: "Linechart",
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: "Line 1",
        type: "line",
        data: [1, 2, 3],
      },
    ],
  });
  chart3 = new Chart({
    chart: {
      type: "line",
    },
    title: {
      text: "Linechart",
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: "Line 1",
        type: "line",
        data: [1, 2, 3],
      },
    ],
  });
  chart4 = new Chart({
    chart: {
      type: "line",
    },
    title: {
      text: "Linechart",
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: "Line 1",
        type: "line",
        data: [1, 2, 3],
      },
    ],
  });

  chart5 = new Chart({
    chart: {
      type: "line",
    },
    title: {
      text: "Linechart",
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: "Line 1",
        type: "line",
        data: [1, 2, 3],
      },
    ],
  });

  chart6 = new Chart({
    chart: {
      type: "line",
    },
    title: {
      text: "Linechart",
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: "Line 1",
        type: "line",
        data: [1, 2, 3],
      },
    ],
  });

  chart7 = new Chart({
    chart: {
      type: "line",
    },
    title: {
      text: "Linechart",
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: "Line 1",
        type: "line",
        data: [1, 2, 3],
      },
    ],
  });

  chart8 = new Chart({
    chart: {
      type: "line",
    },
    title: {
      text: "Linechart",
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: "Line 1",
        type: "line",
        data: [1, 2, 3],
      },
    ],
  });


  initLineChart(): void {
    this.lineChartOptions = {
      series: [
        {
          name: "Cars",
          type: "line",
          data: [0, 5000, 7000, 8250, 11300, 10000, 14500, 13000, 18000, 19200, 17500, 20100, 20500, 18500, 17200, 18000, 14000, 15000, 11000, 9000, 7000, 5000, 0]
        }
      ],
      chart: {
        height: 300,
        type: "line",
        stacked: false,
        toolbar: {
          show: false,
        }
      },
      stroke: {
        curve: "smooth"
      },
      plotOptions: {
        bar: {
          columnWidth: "50%"
        }
      },
      colors: ['#fa5c7c'],
      fill: {
        opacity: [1],
        gradient: {
          inverseColors: false,
          shade: "light",
          type: "vertical",
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100]
        }
      },
      labels: [
      ],
      markers: {
        size: 0
      },
      xaxis: {
        categories: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
    tickAmount: 8  // optional tickAmount valu
       
      },
      yaxis: {
        title: {
          text: undefined
        },
        min: 0
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y: number) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + "";
            }
            return y;
          }
        }
      }
    };
  }

  initBarChartOptions1() : void{
    this.barChartOptions1 = {
      series: [
        {
          name: "basic",
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }
      ],
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: [
          "South Korea",
          "Canada",
          "United Kingdom",
          "Netherlands",
          "Italy",
          "France",
          "Japan",
          "United States",
          "China",
          "Germany"
        ]
      },
      colors: ['#39afd1']
    };
  }

  initEuiOptions(){
    this.euiOptions = {
      series: [
        {
          name: "basic",
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }
      ],
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: [
          "South Korea",
          "Canada",
          "United Kingdom",
          "Netherlands",
          "Italy",
          "France",
          "Japan",
          "United States",
          "China",
          "Germany"
        ]
      },
      colors: ['#39afd1']
    };
  }
  initCuiOptions(){
    this.cuiOptions = {
      series: [
        {
          name: "basic",
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }
      ],
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: [
          "South Korea",
          "Canada",
          "United Kingdom",
          "Netherlands",
          "Italy",
          "France",
          "Japan",
          "United States",
          "China",
          "Germany"
        ]
      },
      colors: ['#39afd1']
    };
  }

  initSingleAreaChartOptions() : void {
    this.singleAreaChartOptions = {
      series: [
        
        {
          name: "Forecasted",
          type: "area",
          data: [1 , 5, 10 , 15, 20],
          color: '#39afd1'
        },
        {
          name: "Actual",
          type: "area",
          data: [1 , 5, 10 , 0, 0], 
          color: '#fa5c7c'
        },
      ],
      chart: {
        height: 160,
        type: "area",
        stacked: false,
        toolbar: {
          show: false,
        }
      },
      stroke: {
        width: [],
        curve: "smooth"
      },
      plotOptions: {
        bar: {
          columnWidth: "50%"
        }
      },
      fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
          inverseColors: false,
          shade: "light",
          type: "vertical",
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100]
        }
      },
      markers: {
        size: 0
      },
      xaxis: {
        categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
        labels: {
          formatter: (val: string) => {
            return val;
          }
        }
      },
      yaxis: {
        title: {
          text: undefined
        },
        min: 0,
        max : 20, 
        tickAmount: 5  // optional tickAmount valu

      },
      legend: {
        show: false,
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y: number) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + "";
            }
            return y;
          }
        }
      }
    };
  }
}
