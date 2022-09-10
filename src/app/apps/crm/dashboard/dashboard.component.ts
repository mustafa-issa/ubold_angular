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
  ngOnInit(): void {
    this.chartOptions = this.getChartOptions();
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
    chart3 = carsFuel;
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
    return localStorage.getItem('theme') || this.theme;
}

getDayOfWeek() : number {
    const d = new Date();
    let day = d.getDay(); 
    return day;  
}

}
