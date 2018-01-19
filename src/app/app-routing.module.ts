import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component'
import { VeiculosComponent } from './veiculos/veiculos.component'
import { PatiosComponent } from './patios/patios.component'

const routes: Routes = [  
  { path: 'clientes', component: ClientesComponent },
  { path: 'veiculos', component: VeiculosComponent },
  { path: 'patios', component: PatiosComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],  
  exports: [ RouterModule ]
})
export class AppRoutingModule {}