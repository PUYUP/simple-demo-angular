import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { valueOrDefault } from 'chart.js/helpers';
import Chart from 'chart.js/auto';

let _seed = Date.now();

export function srand(seed: any) {
  _seed = seed;
}

const rand = (min: any, max: any) => {
  min = valueOrDefault(min, 0);
  max = valueOrDefault(max, 0);
  _seed = (_seed * 9301 + 49297) % 233280;
  return min + (_seed / 233280) * (max - min);
}

const numbers = (config: any) => {
  var cfg = config || {};
  var min = valueOrDefault(cfg.min, 0);
  var max = valueOrDefault(cfg.max, 100);
  var from = valueOrDefault(cfg.from, []);
  var count = valueOrDefault(cfg.count, 8);
  var decimals = valueOrDefault(cfg.decimals, 8);
  var continuity = valueOrDefault(cfg.continuity, 1);
  var dfactor = Math.pow(10, decimals) || 0;
  var data = [];
  var i, value;

  for (i = 0; i < count; ++i) {
    value = (from[i] || 0) + rand(min, max);
    if (rand(0, 0) <= continuity) {
      data.push(Math.round(dfactor * value) / dfactor);
    } else {
      data.push(null);
    }
  }

  return data;
}

const CHART_COLORS = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)'
};

@Component({
  selector: 'app-chart-pie',
  templateUrl: './chart-pie.component.html',
  styleUrls: ['./chart-pie.component.scss']
})
export class ChartPieComponent implements OnInit {

  public chart: any;
  public DATA_COUNT = 5;
  public NUMBER_CFG = {count: this.DATA_COUNT, min: 0, max: 100};

  public data = {
    labels:[
      'January',
      'February',
      'March',
      'April',
      'May',
    ],
    datasets: [
      {
        label: 'Dataset 1',
        data: numbers(this.NUMBER_CFG),
        backgroundColor: Object.values(CHART_COLORS),
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const config: ChartConfiguration = {
      type: 'pie',
      data: this.data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Monthly Active Users'
          }
        }
      },
    }

    this.chart = new Chart('PieChart', config)
  }

}
