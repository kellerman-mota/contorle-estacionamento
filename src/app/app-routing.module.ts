import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component'
import { VeiculosComponent } from './veiculos/veiculos.component'
import { PatiosComponent } from './patios/patios.component'
import { HomeComponent } from './home/home.component'

const routes: Routes = [  
  { path: 'clientes', component: ClientesComponent },
  { path: 'veiculos', component: VeiculosComponent },
  { path: 'patios', component: PatiosComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: "/home", pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],  
  exports: [ RouterModule ]
})
export class AppRoutingModule {}