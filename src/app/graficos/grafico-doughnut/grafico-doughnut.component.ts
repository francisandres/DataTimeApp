import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-grafico-doughnut',
  templateUrl: './grafico-doughnut.component.html',
  styleUrls: ['./grafico-doughnut.component.css']
})
export class GraficoDoughnutComponent implements OnInit {

  public doughnutChartLabels: Label[] = ['Telefones', 'Computadores', 'Roupa'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100],

  ];
  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
