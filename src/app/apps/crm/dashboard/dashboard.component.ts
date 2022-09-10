import { Component, OnInit } from "@angular/core";
import { Chart } from "angular-highcharts";
import { carsFuel } from "./charts/cars-fuel";
import { cEStandard } from "./charts/ce-standard";
import { DailyCars } from "./charts/daily-cars-traffic";
import * as Highcharts from 'highcharts';
import { enteredCars } from "./charts/entered-cars";
import { carbonFootPrint } from "./charts/carbon-foot-print";
import { dailyCarBrandName } from "./charts/daily-car-brand";
import theme_dark from 'highcharts/themes/dark-unica';
import { interval, tap } from "rxjs";

declare var require: any;
let More = require('highcharts/highcharts-more');
More(Highcharts);

@Component({
  selector: "app-crm-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
    evData = [130, 230, 200, 80, 130, 270, 180];
    PetrolData = [440, 550, 410, 670, 220, 430, 250];
    Highcharts: typeof Highcharts = Highcharts;
    chartOptions?: Highcharts.Options;

    areaChartOptions: any;
    lineChartOptions: any;

    columnChartOptions : any;
    barChartOptions2 : any;

    piChartOptions: any;
    singleAreaChartOptions: any;
  ngOnInit(): void {
    this.chartOptions = this.getChartOptions();
    this.initAreaChart();
    this.initLineChart();
    this.initColumnChart();
    this.initBarChartOptions2();

    this.initPiChartOptions();
    this.initSingleAreaChartOptions();

    var dayOfWeek = this.getDayOfWeek();
    this.evData[dayOfWeek] = this.evData[dayOfWeek] / 10;
    this.PetrolData[dayOfWeek] = this.PetrolData[dayOfWeek] / 10;
    interval(10000) 
      .pipe(
        tap(() => {
            this.evData[dayOfWeek] = this.evData[dayOfWeek] + 1;
            this.PetrolData[dayOfWeek] = this.PetrolData[dayOfWeek] + 2;
            this.chartOptions = this.getChartOptions();
        })
      )
      .subscribe();
    if(this.theme === 'dark') {
        theme_dark(Highcharts);
    }
  }

  cEStandard = cEStandard;
    chart2 = DailyCars.dailyCars;
    chart3 = carsFuel(this.theme);
    chart4 = enteredCars;
    chart5 = carbonFootPrint;
    chart6 = dailyCarBrandName;
    chart8 = new Chart({
        chart: {
            type: 'areaspline',
            height: '50%',
            marginTop: 10,
            marginBottom: 0,
            marginLeft: 0,
            marginRight: 0,
            plotShadow: false,
            borderWidth: 0,
            plotBorderWidth: 0
        },
        
        title: {
            text: ''
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        yAxis: {
          title: {
              text: ''
          }
      },
        series: [
          {
            type: 'areaspline',
            data: [10, 20, 15, 30, 35, 30, 45, 59, 30, 35, 25, 29, 15]
        }]
    });
  messages: any = [
    {
        value: 20,
        icon: 'fas fa-motorcycle',
        text: "Motorcycle",
    },
    {
        value: 320,
        icon: 'fas fa-car',
        text: 'Sedan',
    },
    {
        value: 114,
        icon: 'fas fa-car-side',
        text: 'SUV',
    },
    {
        value: 25,
        icon: 'fas fa-truck-pickup',
        text: 'Pickup',
    },
    {
        value: 50,
        icon: 'fas fa-shuttle-van',
        text: 'Van',
    },
    {
        value: 10,
        icon: 'fas fa-bus',
        text: 'Bus',
    },
    {
        value: 2,
        icon: 'fas fa-truck',
        text: 'Truck',
    },
    {
      value: 5,
      icon: 'fas fa-tractor',
      text: 'Others',
  },
];


public getChartOptions(): Highcharts.Options {
    return {
        credits: {
          enabled: false
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
          data: this.evData
      },{
            name: 'Petrol',
            type: 'column',
            data: this.PetrolData
        }]
      };
}

public get theme() : string {
    return localStorage.getItem('theme') || 'dark';
}

getDayOfWeek() : number {
    const d = new Date();
    let day = d.getDay(); 
    return day;  
}

initAreaChart(): void {
    this.areaChartOptions = {
      series: [
        {
          name: "CO2",
          type: "area",
          data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
        },
        {
          name: "EU",
          type: "area",
          data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
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
        width: [0, 2, 5],
        curve: "smooth"
      },
      plotOptions: {
        bar: {
          columnWidth: "50%"
        }
      },
      colors: ['#fa5c7c', '#39afd1'],
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
      labels: [
        "01/01/2003",
        "02/01/2003",
        "03/01/2003",
        "04/01/2003",
        "05/01/2003",
        "06/01/2003",
        "07/01/2003",
        "08/01/2003",
        "09/01/2003",
        "10/01/2003",
        "11/01/2003"
      ],
      markers: {
        size: 0
      },
      xaxis: {
        type: "datetime"
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
              return y.toFixed(0) + " points";
            }
            return y;
          }
        }
      }
    };
  }
  
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

  initBarChartOptions2(): void {
    this.barChartOptions2 = {
      series: [
        {
          name: "EV Cars",
          data: [44, 55, 41, 37, 22, 43, 21], 
          color: "#fa5c7c",
        },
        {
          name: "Petrol Cars",
          data: [53, 32, 33, 52, 13, 43, 32],
          color: "#39afd1",
        },
      ],
      chart: {
        type: "bar",
        height: 300,
        stacked: true,
        toolbar: {
          show: false
        }

      },
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      stroke: {
        width: 1,
        colors: ["#fff"]
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
        }
      },
      tooltip: {
        y: {
          formatter: function (val: number) {
            return val + "K";
          }
        }
      },
      fill: {
        opacity: 1
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
        offsetX: 40
      }
    };
  }

  initColumnChart(): void {
    this.columnChartOptions = {
      series: [
        {
          name: "Carbon Foot Print (KG.CO2/kWh)",
          type: "column",
          data: [30, 25, 36, 30, 45, 35, 64]
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
          text: 'KG.CO2/kWh'
        },
        min: 0
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y: number) {
            if (typeof y !== "undefined") {
              return y.toFixed(0);
            }
            return y;
          }
        }
      }
    };
  }


  initPiChartOptions() : void{
    this.piChartOptions = {
      chart: {
        height: 150,
        type: 'pie',
        toolbar: {
          show: false
        }
      },
      series: [560, 450, 320, 255, 700],
      labels: ["Toyota", "Nissan", "Mercedes", "BMW", "Others"],
      colors: ["#6658dd", "#4fc6e1", "#4a81d4", "#00b19d", "#f1556c"],
      dataLabels: {
        enabled: false
      },
      legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
        // verticalAlign: 'middle',
        floating: false,
        fontSize: '14px',
        offsetX: 0,
        offsetY: -10
      },
      responsive: [{
        breakpoint: 600,
        options: {
          chart: {
            height: 270
          },
          legend: {
            show: false
          },
        }
      }]
    }
  }
  initSingleAreaChartOptions() : void {
    this.singleAreaChartOptions = {
      series: [
        {
          name: "TEAM A",
          type: "area",
          data: [23, 11, 22, 27, 13]
        }
      ],
      chart: {
        height: 150,
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
      colors: ['#727cf5', '#39afd1', '#fa5c7c'],
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
      labels: [
        "01/01/2003",
        "02/01/2003",
        "03/01/2003",
        "04/01/2003",
        "05/01/2003",
        "06/01/2003",
        "07/01/2003",
        "08/01/2003",
        "09/01/2003",
        "10/01/2003",
        "11/01/2003"
      ],
      markers: {
        size: 0
      },
      xaxis: {
        type: "datetime"
      },
      yaxis: {
        title: {
          text: "Points"
        },
        min: 0
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y: number) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + " points";
            }
            return y;
          }
        }
      }
    };
  }

}
