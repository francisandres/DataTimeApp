import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { GraficobarraComponent } from './graficos/graficobarra.component';
import { GraficoLinhaComponent } from './graficos/grafico-linha/grafico-linha.component';
import { AdicionarReceitaComponent } from './receitas/adicionar-receita.component';
import { ReceitasDashboardComponent } from './receitas/receitas-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    GraficobarraComponent,
    GraficoLinhaComponent,
    AdicionarReceitaComponent,
    ReceitasDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
