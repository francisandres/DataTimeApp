import { Component, OnInit } from '@angular/core';
import { FluxosReceitasService } from 'src/app/fluxos/fluxos-receitas.service';

@Component({
  selector: 'app-dr-principal',
  templateUrl: './dr-principal.component.html',
  styleUrls: ['./dr-principal.component.css']
})
export class DrPrincipalComponent implements OnInit {
total = [];
  constructor(private fluxSer: FluxosReceitasService) { }

  ngOnInit() {
  
    if (this.fluxSer.periodoEstudo.length === 0) {
      this.fluxSer.periodoEstudo = ['Dec-2019', 'Jan-2020', 'Feb-2020', 'Mar-2020',
      'Apr-2020', 'May-2020', 'Jun-2020', 'Jul-2020', 'Aug-2020', 'Sep-2020', 'Out-2020',
    'Nov-2020' ];
     }
     this.total = this.fluxSer.fluxos.reduce(
       (r, a) => a.receitas.map(
         ( b, i) => (r[i] || 0) + (b.valor * b.quantidade)), []
       );
        


  }

}
