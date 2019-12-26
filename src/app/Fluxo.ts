export class Fluxo {
    nome: string;
    datainicio: string;
    tipo: string;
    receitas: {
        data: string;
        valor: number;
        quantidade: number;
    }[];
    total: number;
  }
