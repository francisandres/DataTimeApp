import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { addMonths, format } from 'date-fns';

import Stepper from 'bs-stepper';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { Fluxo } from '../Fluxo';
import { FluxosReceitasService } from '../fluxos/fluxos-receitas.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-adicionar-receita',
  templateUrl: './adicionar-receita.component.html',
  styleUrls: ['./adicionar-receita.component.css']
})
export class AdicionarReceitaComponent implements OnInit {
  @Output() fechar = new EventEmitter();
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
  formattedAmount;
  projecao: any[] = [];
  preco: number;
  variacao = -10 / 12;
  tipo = null;
  servicoSubscricao = null;
  fluxo: Fluxo = new Fluxo();

  constructor(private fluxSer: FluxosReceitasService, private router: Router) {}

  ngOnInit(): void {
    this.datastring = format(new Date(), 'yyyy-MM-dd');
    this.fluxo.receitas = [];
    this.fluxo.receitas.length = 12; /* this.fluxSer.periodoEstudo.length; */
    this.fluxo.receitas.fill(
      { data: null, valor: null, quantidade: 1 },
      0,
      12
      /* this.fluxSer.periodoEstudo.length */
    );
    this.fluxSer.periodoEstudo.forEach((e, i) => {
      this.fluxo.receitas[i] = { ...this.fluxo.receitas[i], data: e };
    });

    this.fluxSer.periodoEstudo.forEach(e => this.chartLabels.push(e));
    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true
    });
  }



  onValorChange(e) {
    this.preco = e.target.value;
    console.log(e.target.value);
    this.fluxSer.periodoEstudo.forEach((el, i) => {
      this.fluxo.receitas[i] = {
        ...this.fluxo.receitas[i],

        valor: this.preco
      };
      this.projecao.push(+this.preco);
      this.preco = this.preco * (this.variacao / 100 + 1);
    });
    this.chartData[0] = { ...this.chartData[0], data: this.projecao };
    console.log(
      this.projecao.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      )
    );
  }

  onSubmit() {
    this.fluxSer.fluxos.push(this.fluxo);
    // tslint:disable-next-line: prefer-const
    let print = Array(12).fill(null);

    this.fluxo.receitas.forEach((e, i) => {
      print[i + 1] = (e.valor / 114) * 14 * e.quantidade;
    });

    this.fluxSer.fluxosimpostos.push({
      nome: 'Impostos',
      receitas: print.slice(0, 12).map((e, i) => ({
        valor: Math.round(e * 100) / 100,
        data: this.fluxo.receitas[i].data
      }))
    } as Fluxo);
    console.log({
      nome: 'Impostos',
      receitas: print
        .slice(0, 12)
        .map((e, i) => ({ valor: e, data: this.fluxo.receitas[i].data }))
    });
    this.fechar.emit(true);
    this.router.navigateByUrl('/');
  }

  next() {
    this.stepper.next();
    console.log(this.fluxo);
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
  onSelectReceita(e) {
    this.tipo = e.target.value;
    this.servicoSubscricao = null;
  }
  onSelectSubscricao(e) {
    this.servicoSubscricao = e.target.value;
  }
}
