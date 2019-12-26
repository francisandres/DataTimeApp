import { OnInit, Component } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FluxosReceitasService } from 'src/app/fluxos/fluxos-receitas.service';

@Component({
  selector: 'app-receitas-princial',
  templateUrl: './receitas-princial.component.html',
  styleUrls: ['./receitas-princial.component.css']
})
export class ReceitasPrincialComponent implements OnInit {
  closeResult: string;
  totalQuantidade: any[] = [];
  total: any[] = [];
  constructor(
    private modalService: NgbModal,
    private fluxSer: FluxosReceitasService
  ) {}

  ngOnInit() {
    const quantidademensal = [];
    const totalmensal = [];
    this.fluxSer.fluxos.forEach((el, ind) => {
      el.receitas.forEach(
        (e, i) => {(totalmensal[i] = e.quantidade * e.valor);
        quantidademensal[i] = e.quantidade;
        }
      );
      this.total.push(totalmensal.reduce(
        (acc, curr) => acc + curr
      ));
      this.totalQuantidade.push(quantidademensal.reduce(
        (acc, curr) => acc + curr
      ));
    });
  }
  open(content) {
    this.modalService
      .open(content, {
        ariaLabelledBy: 'modal-basic-title',
        size: 'lg',
        centered: true,
        backdropClass: 'light-blue-backdrop'
      })
      .result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  fecharModal() {
    this.modalService.dismissAll();
  }
}
