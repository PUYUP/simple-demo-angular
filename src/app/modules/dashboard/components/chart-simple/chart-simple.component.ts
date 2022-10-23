import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-chart-simple',
  templateUrl: './chart-simple.component.html',
  styleUrls: ['./chart-simple.component.scss']
})
export class ChartSimpleComponent implements OnInit {

  public chart: any;
  public labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  public data = {
    labels: this.labels,
    datasets: [{
      label: 'User Loss Monthly',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };

  constructor() { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    const config: ChartConfiguration = {
      type: 'line',
      data: this.data,
      options: {}
    };

    this.chart = new Chart('SimpleChart', config)
  }

}
