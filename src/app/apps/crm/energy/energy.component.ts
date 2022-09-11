import { Component, OnInit } from "@angular/core";

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
  radialChartOptions1: any;

  constructor() {}

  ngOnInit(): void {
    this.initLineChart();
    this.initBarChartOptions1();
    this.initEuiOptions();
    this.initCuiOptions();
    this.initSingleAreaChartOptions();
    this.initRadialCharts();

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
        occupancy: 
        {
          series: [70],
          chart: {
            height: 100,
            type: "radialBar",
            toolbar: {
              show: false
            }
          },
          plotOptions: {
            radialBar: {
              hollow: {
                size: "70%"
              }
            }
          },
          labels: ["Cricket"],
          colors: ['#39afd1']
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
        occupancy: 
        {
          series: [70],
          chart: {
            height: 100,
            type: "radialBar",
            toolbar: {
              show: false
            }
          },
          plotOptions: {
            radialBar: {
              hollow: {
                size: "70%"
              }
            }
          },
          labels: ["Cricket"],
          colors: ['#39afd1']
        }
      }]

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


  initLineChart(): void {
    this.lineChartOptions = {
      series: [
        {
          name: "Cars",
          type: "line",
          data: [0, 30, 90, 120, 150, 150, 210, 240, 270, 300, 330, 360 ]
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
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
       
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
          data: [400, 430, 448, 470, 540]
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
          data: [400, 430, 448, 470, 540]
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
          data: [400, 430, 448, 470, 540]
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

  initRadialCharts(): void {
    this.radialChartOptions1 = {
      series: [70],
      chart: {
        height: 100,
        type: "radialBar",
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "70%"
          }
        }
      },
      labels: ["Cricket"],
      colors: ['#39afd1']
    };
   
  }
}
