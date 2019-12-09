import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-graficobarra',
  templateUrl: './graficobarra.component.html',
  styleUrls: ['./graficobarra.component.css']
})
export class GraficobarraComponent implements OnInit {
  @Input() barChartData: ChartDataSets[];

  @Input() barChartLabels: Label[];

  barChartOptions = {
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
  barChartColors: Color[] = [
    {
      borderColor: 'blue',
      borderWidth: 1,
      backgroundColor: 'rgba(0, 181, 204, 0.2)'
    }
  ];

  barChartLegend = true;
  barChartPlugins = [];
  barChartType = 'bar';

  constructor() {}

  ngOnInit() {}
}
