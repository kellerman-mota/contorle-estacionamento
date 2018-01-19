import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteService } from './clientes/cliente.service';
import { AppRoutingModule } from './app-routing.module';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { VeiculoService } from './veiculos/veiculo.service';

@NgModule({
  declarations: [
    AppComponent,    
    ClientesComponent, VeiculosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,    
  ],
  providers: [ClienteService, VeiculoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
