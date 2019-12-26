import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdicionarReceitaComponent } from './receitas/adicionar-receita.component';
import { ReceitasDashboardComponent } from './receitas/receitas-dashboard.component';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';
import { ConfiguracoesGuardGuard } from './guards/configuracoes-guard.guard';
import { ReceitasPrincialComponent } from './receitas/principal/receitas-princial.component';
import { DrPrincipalComponent } from './DR/dr-principal/dr-principal.component';
import { DespesasPrincipalComponent } from './despesas/despesas-principal/despesas-principal.component';

const routes: Routes = [
  { path: 'receita', component: ReceitasPrincialComponent },
  {path: 'despesa', component: DespesasPrincipalComponent},
  { path: 'dashboard', component: ReceitasDashboardComponent, canActivate: [ConfiguracoesGuardGuard] },
  {path: 'config', component: ConfiguracoesComponent},
  {path: 'addreceita', component: AdicionarReceitaComponent},
  {path: 'demosderesult', component: DrPrincipalComponent},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
