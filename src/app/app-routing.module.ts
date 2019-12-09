import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdicionarReceitaComponent } from './receitas/adicionar-receita.component';
import { ReceitasDashboardComponent } from './receitas/receitas-dashboard.component';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';

const routes: Routes = [
  { path: 'criarreceita', component: AdicionarReceitaComponent },
  { path: 'dashboard', component: ReceitasDashboardComponent },
  {path: 'config', component: ConfiguracoesComponent},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
