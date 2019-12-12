import { Component, OnInit } from '@angular/core';
import { FluxosReceitasService } from '../fluxos/fluxos-receitas.service';
import { addMonths, format, toDate } from 'date-fns';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.css']
})
export class ConfiguracoesComponent implements OnInit {
  selectedData;
  data;
  datastring;

  anos = ['2000', '2001', '2002', '2003', '2004', '2005', '2006',
  '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019','2020','2021','2022','2023'];
  anoSelecionado = 'Ano';
  meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  mesSelecionado = 'Mês';
  moedaSelecionada = 'Moeda';
  moedas = ['Kz Kwanza', '$ dólar', '€ Euro', 'Rand'];
  constructor(private fluxser: FluxosReceitasService, private router: Router) {}

  ngOnInit() {
  this.datastring = format(new Date, 'MMM-yyyy');

  }
  onSelectAno(e) {
    if (!this.data) {
      this.data = new Date();
    }

    this.fluxser.periodoEstudo.length = e.target.value * 12;
    this.fluxser.periodoEstudo.fill(null, 0, e.target.value * 12);
    console.log(this.datastring);

    this.fluxser.periodoEstudo.forEach((el, i) => {
      this.fluxser.periodoEstudo[i] = format(this.data, 'MMM-yyyy');
      this.data = addMonths(this.data, 1);
      return el;
    });

    console.log(this.fluxser.periodoEstudo);
  }
  onChangeData() {

    this.data = this.selectedData;
    if (!this.data) {
      this.data = new Date();
    }

    this.fluxser.periodoEstudo.forEach((el, i) => {
      this.fluxser.periodoEstudo[i] = format(this.data, 'MMM-yyyy');
      this.data = addMonths(this.data, 1);
      return el;
    });
    console.log(this.fluxser.periodoEstudo);
  }
  onSubmit() {
    console.log(this.fluxser.periodoEstudo);
    this.fluxser.guard = true;
    this.router.navigateByUrl('/');
  }
}
