import { Component, OnInit } from '@angular/core';
import { FluxosReceitasService } from '../fluxos/fluxos-receitas.service';
import { addMonths, format } from 'date-fns';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.css']
})
export class ConfiguracoesComponent implements OnInit {

  constructor(private fluxser: FluxosReceitasService) { }

  ngOnInit() {
  }
onSelectAno(e) {

  let data = new Date();
  this.fluxser.periodoEstudo.length = e.target.value * 12;
  this.fluxser.periodoEstudo.fill(null, 0, e.target.value * 12 );

  this.fluxser.periodoEstudo.forEach(
    ( el , i) => {
      this.fluxser.periodoEstudo[i] = format(data, 'MMM-yyyy');
      data = addMonths(data, 1);
      return el;
    });

  console.log(this.fluxser.periodoEstudo);
}
}
