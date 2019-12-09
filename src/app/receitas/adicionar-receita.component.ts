import { Component, OnInit } from '@angular/core';
import { addMonths, format } from 'date-fns';


import Stepper from 'bs-stepper';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { Fluxo } from '../Fluxo';
import { FluxosReceitasService } from '../fluxos/fluxos-receitas.service';


@Component({
  selector: 'app-adicionar-receita',
  templateUrl: './adicionar-receita.component.html',
  styleUrls: ['./adicionar-receita.component.css']
})
export class AdicionarReceitaComponent implements OnInit {
  private stepper: Stepper;
  chartLabels: Label[] = [];
  chartData: ChartDataSets[] = [
    {
      data: [85, 72, 78, 75, 77, 75],
      label: 'Receita',
      barThickness: 24, // number (pixels) or 'flex'
      maxBarThickness: 28 // number (pixels)
    }
  ];

  data;
  datastring;
  projecao: any[] = [];
  preco: number;
  variacao = -20 / 12;
  grafico = true;

  fluxo: Fluxo;

  constructor(private fluxSer: FluxosReceitasService) { }

  ngOnInit(): void {
    this.fluxo = new Fluxo();
    this.datastring = format(new Date(), 'yyyy-MM-dd');
    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true
    });
  }

  onSubmit() {
    this.fluxSer.fluxos.push(this.fluxo);
    console.log(this.fluxSer.fluxos);
  }
  next() {
    this.stepper.next();
  }

  OnChangeProjecao(e) {
    // refactor de formas a tornar mais funcional
    this.fluxo.nome = this.chartData[0].label;
    this.data = new Date(this.datastring);
    if (!this.fluxo.receitas) {
      this.fluxo.receitas = [];
    }
    this.fluxo.receitas.length = e.target.value * 12;
    this.chartLabels.length = e.target.value * 12;
    this.projecao.length = e.target.value * 12;
    console.log(this.fluxo);

    for (let i = 0; i < e.target.value * 12; i++) {
      // tslint:disable-next-line:no-debugger
      this.projecao[i] = this.preco;
      this.fluxo.receitas[i] = {
        data: format(this.data, 'MMM/yyyy'),
        valor: this.preco,
        quantidade: 1
      };
      this.chartLabels[i] = format(this.data, 'MMM/yyyy');

      this.data = addMonths(this.data, 1);
      this.preco =
        Math.round(this.projecao[i] * (this.variacao / 100 + 1) * 100) / 100;
    }

    this.chartData[0] = { ...this.chartData[0], data: this.projecao };
    this.chartLabels = this.chartLabels.slice(0, 12);
    console.log(this.fluxo);
  }
  OnChangeData(e) {
    if (!e) {
      return;
    } else {
      this.datastring = e.target.value;
      this.data = new Date(this.datastring);
      for (let i = 0; i < this.fluxo.receitas.length; i++) {
        // tslint:disable-next-line:no-debugger

        this.fluxo.receitas[i] = {
          data: format(this.data, 'MMM/yyyy'),
          valor: null,
          quantidade: 1
        };
        this.chartLabels[i] = format(this.data, 'MMM/yyyy');
        // tslint:disable-next-line:no-debugger

        this.data = addMonths(this.data, 1);
      }
      this.chartData[0] = { ...this.chartData[0], data: [] };
      this.chartLabels = this.chartLabels.slice(0, 12);
      console.log(this.fluxo.receitas);
    }
  }

  onChangeValor(e, i) {
    this.fluxo.receitas.forEach((res, index) => {
      this.chartData[0].data[index] = +(res.valor * res.quantidade);
    });
    this.chartLabels = this.chartLabels.slice(0, 12);
  }
  onChangeQuantidade(e, i) {
    this.fluxo.receitas.forEach((res, index) => {
      this.chartData[0].data[index] = +(res.valor * res.quantidade);
    });
    this.chartLabels = this.chartLabels.slice(0, 12);

}
trocarGrafico() {
  this.grafico ? this.grafico = false : this.grafico = true;
}
}
