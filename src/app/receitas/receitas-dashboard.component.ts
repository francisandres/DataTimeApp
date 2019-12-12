import { Component, OnInit } from '@angular/core';
import { FluxosReceitasService } from '../fluxos/fluxos-receitas.service';
import { Label } from 'ng2-charts';
import { ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-receitas-dashboard',
  templateUrl: './receitas-dashboard.component.html',
  styleUrls: ['./receitas-dashboard.component.css']
})
export class ReceitasDashboardComponent implements OnInit {
  chartLabels: Label[] = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez'
  ];
  chartData: ChartDataSets[] = [
    {
      data: [85, 72, 78, 75, 77, 75],
      label: 'Receita',
      barThickness: 24, // number (pixels) or 'flex'
      maxBarThickness: 28 // number (pixels)
    }
  ];

  impostosData: ChartDataSets[] = [];
  constructor(private fluxrecser: FluxosReceitasService) {}

  ngOnInit() {
    console.log(this.fluxrecser.fluxosimpostos);
    this.fluxrecser.fluxos.forEach(e => {
      this.chartData.push({
        data: e.receitas.map(el => {
          return el.valor * el.quantidade;
        }),
        label: e.nome,
        stack: 'Receitas'
      });
    });

    this.fluxrecser.fluxosimpostos.forEach(e => {
      this.impostosData.push({
        data: e.receitas.map(el => {
          return el.valor;
        }),
        label: e.nome,
        stack: 'Impostos'
      });
    });

    this.fluxrecser.periodoEstudo.forEach((e, i) => {
      this.chartLabels[i] = e;
    });
  }
}
