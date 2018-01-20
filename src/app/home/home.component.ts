import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../clientes/cliente.service'
import { VeiculoService } from '../veiculos/veiculo.service'
import { PatioService } from '../patios/patio.service'
import { PermanenciaService } from '../permanencia/permanencia.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
  private clienteService: ClienteService,
  private veiculoService: VeiculoService,
  private patioService: PatioService,
  private permanenciaService: PermanenciaService) { }

  ngOnInit() {
      this.getCountClientes();  
      this.getCountVeiculos();  
      this.getCountPatioVagas();
      this.getCountPatio();
      this.getountVagasOcupadas();
      this.getCountVagasLivres();
  }
    
  countClientes: number;  
  countPatioVagas: number;  
  countPatio: number;
  countVeiculos: number;
  countVagasOcupadas: number;
  countVagasLivres: number  
   
    
  getCountClientes(): void {     
     this.clienteService.count().then(countClientes => this.countClientes = countClientes);       
  }
      
  getCountPatioVagas(): void {     
     this.patioService.countVagas().then(countPatioVagas => this.countPatioVagas = countPatioVagas);       
  } 
     
  getCountPatio(): void {     
     this.patioService.count().then(countPatio => this.countPatio = countPatio);       
  } 
     
  getCountVeiculos(): void {     
     this.veiculoService.count().then(countVeiculos => this.countVeiculos = countVeiculos);       
  }
    
  getountVagasOcupadas(): void {     
     this.permanenciaService.getCountOcupadas().then(countVagasOcupadas => this.countVagasOcupadas = countVagasOcupadas);       
  }
    
  getCountVagasLivres(): void {     
     this.permanenciaService.getCountLivres().then(countVagasLivres => this.countVagasLivres = countVagasLivres);       
  }

}
