import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdicionarReceitaComponent } from './receitas/adicionar-receita.component';
import { ReceitasDashboardComponent } from './receitas/receitas-dashboard.component';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';
import { ConfiguracoesGuardGuard } from './guards/configuracoes-guard.guard';
import { ReceitasPrincialComponent } from './receitas/principal/receitas-princial.component';

const routes: Routes = [
  { path: 'receita', component: ReceitasPrincialComponent },
  { path: 'dashboard', component: ReceitasDashboardComponent, canActivate: [ConfiguracoesGuardGuard] },
  {path: 'config', component: ConfiguracoesComponent},
  {path: 'addreceita', component: AdicionarReceitaComponent},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
