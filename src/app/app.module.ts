import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteService } from './clientes/cliente.service';
import { AppRoutingModule } from './app-routing.module';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { VeiculoService } from './veiculos/veiculo.service';
import { PatiosComponent } from './patios/patios.component';
import { PatioService } from './patios/patio.service';
import { HomeComponent } from './home/home.component';
import { PermanenciaComponent } from './permanencia/permanencia.component';
import { PermanenciaService } from './permanencia/permanencia.service';

@NgModule({
  declarations: [
    AppComponent,    
    ClientesComponent, VeiculosComponent, PatiosComponent, HomeComponent, PermanenciaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,    
  ],
  providers: [ClienteService, VeiculoService, PatioService, PermanenciaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
