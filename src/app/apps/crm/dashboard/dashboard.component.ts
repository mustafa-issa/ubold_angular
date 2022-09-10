import { Component, OnInit } from "@angular/core";
import { Chart } from "angular-highcharts";
import { carsFuel } from "./charts/cars-fuel";
import { cEStandard } from "./charts/ce-standard";
import { DailyCars } from "./charts/daily-cars-traffic";
import * as Highcharts from 'highcharts';
import { enteredCars } from "./charts/entered-cars";
import { carbonFootPrint } from "./charts/carbon-foot-print";
import { dailyCarBrandName } from "./charts/daily-car-brand";
//import theme from 'highcharts/themes/grid';

declare var require: any;
const More = require('highcharts/highcharts-more');
More(Highcharts);
//theme(Highcharts);
@Component({
  selector: "app-crm-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  cEStandard = cEStandard;
  chart2 = DailyCars.dailyCars;
  chart3 = carsFuel;
  chart4 = enteredCars;
  chart5 = carbonFootPrint;
  chart6 = dailyCarBrandName;
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
}
