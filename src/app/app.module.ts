import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { GraficobarraComponent } from './graficos/graficobarra.component';
import { GraficoLinhaComponent } from './graficos/grafico-linha/grafico-linha.component';
import { AdicionarReceitaComponent } from './receitas/adicionar-receita.component';
import { ReceitasDashboardComponent } from './receitas/receitas-dashboard.component';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';
import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';
import { GraficoDoughnutComponent } from './graficos/grafico-doughnut/grafico-doughnut.component';
import { ReceitasPrincialComponent } from './receitas/principal/receitas-princial.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DrPrincipalComponent } from './DR/dr-principal/dr-principal.component';
import { DespesasPrincipalComponent } from './despesas/despesas-principal/despesas-principal.component';
import { AdicionarDespesaComponent } from './despesas/adicionar-despesa/adicionar-despesa.component';



@NgModule({
  declarations: [
    AppComponent,
    GraficobarraComponent,
    GraficoLinhaComponent,
    AdicionarReceitaComponent,
    ReceitasDashboardComponent,
    ConfiguracoesComponent,
    GraficoDoughnutComponent,
    ReceitasPrincialComponent,
    DrPrincipalComponent,
    DespesasPrincipalComponent,
    AdicionarDespesaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule,
    DlDateTimeDateModule,
    DlDateTimePickerModule,
    NgSelectModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
