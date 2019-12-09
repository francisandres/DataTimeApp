import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdicionarReceitaComponent } from './receitas/adicionar-receita.component';
import { GraficoLinhaComponent } from './graficos/grafico-linha/grafico-linha.component';
import { ReceitasDashboardComponent } from './receitas/receitas-dashboard.component';

const routes: Routes = [
  { path: 'criarreceita', component: AdicionarReceitaComponent },
  { path: 'dashboard', component: ReceitasDashboardComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
