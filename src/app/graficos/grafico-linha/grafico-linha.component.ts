import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-grafico-linha',
  templateUrl: './grafico-linha.component.html',
  styleUrls: ['./grafico-linha.component.css']
})
export class GraficoLinhaComponent implements OnInit {

  @Input() lineChartData: ChartDataSets[];
  @Input() lineChartLabels: Label[];
  public lineChartOptions: ChartOptions = {
    elements: {
      line: {
        tension: 0.1
      }
    },

    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            callback: function(value, index, values) {
              // tslint:disable-next-line:radix
              if (parseInt(value) >= 10) {
                return (
                  'Kz ' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                );
              } else {
                return 'Kz ' + value;
              }
            }
          }
        }
      ],
      xAxes: [{}]
    }
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor() { }

  ngOnInit() {
  }

}
