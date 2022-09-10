import { Chart } from "angular-highcharts";
export class DailyCars {

static getData(): number[] {
  let data = [];
  for (let index = 1; index <= 24; index++) {
    let randVal = +((Math.random()*(20000)).toFixed(0));
    data.push(randVal);
    
  }
  return data;
}

  public static dailyCars = new Chart({
    credits: {
      enabled: false,
    },
    title: {
      text: "Daily Cars Traffic",
      style: {
        fontSize: "13px",
      },
    },
  
    yAxis: {
      title: {
        text: "Number of Cars",
      },
    },
  

  
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
    },
    series: [
      {
        name: "Cars",
        type: "line",
        data: this.getData()
      },
    ],
  
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
            },
          },
        },
      ],
    },
  });
}


