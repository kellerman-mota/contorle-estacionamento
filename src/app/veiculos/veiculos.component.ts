import { Component, OnInit } from '@angular/core';
import { VeiculoService } from './veiculo.service'
import { Veiculo } from './veiculo'

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css'],  
})
export class VeiculosComponent implements OnInit {

  constructor(private veiculoService: VeiculoService) {     
  }

  ngOnInit() {
     this.listar();
  }

  veiculoSelected: Veiculo;
  veiculos: Veiculo[];
  messageSuccess: String;  

  listar(): void {     
     this.veiculoService.listar().then(veiculos => this.veiculos = veiculos);       
  }  
    
  prepararIncluir(): void {
      this.messageSuccess=null;      
      this.veiculoSelected = new Veiculo();              
  }      
    
  salvar(): void {
      this.veiculoService.salvar(this.veiculoSelected).then(veiculos => {
          this.listar();
          this.veiculoSelected = new Veiculo();
          this.messageSuccess = "Veiculo Salvo Com sucesso!";
      })
  }  
    
  excluir(): void {
      if(!confirm("Deseja realmente excluir o veiculo selecionado?"))
        return; 
      this.veiculoService.excluir(this.veiculoSelected).then(() => {
          this.listar();
          this.messageSuccess = "O veiculo "+this.veiculoSelected.id+" foi excluido com sucesso!";
          this.veiculoSelected = new Veiculo();
      })
  }    
    
  onSelect(veiculo: Veiculo): void {
     this.messageSuccess=null;
     this.veiculoSelected = veiculo;
  }


}
