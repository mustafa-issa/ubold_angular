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
  constructor() {}

  ngOnInit(): void {
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
}
