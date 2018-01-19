import { Component, OnInit } from '@angular/core';
import { PatioService } from './patio.service'
import { Patio } from './patio'

@Component({
  selector: 'app-patios',
  templateUrl: './patios.component.html',
  styleUrls: ['./patios.component.css']
})
export class PatiosComponent implements OnInit {

  constructor(private patioService: PatioService) { }

  ngOnInit() {
     this.listar();
  }

  patioSelected: Patio;
  patios: Patio[];
  messageSuccess: String;  

  listar(): void {     
     this.patioService.listar().then(patios => this.patios = patios);       
  }  
    
  prepararIncluir(): void {
      this.messageSuccess=null;      
      this.patioSelected = new Patio();              
  }      
    
  salvar(): void {
      this.patioService.salvar(this.patioSelected).then(patios => {
          this.listar();
          this.patioSelected = new Patio();
          this.messageSuccess = "Patio Salvo Com sucesso!";
      })
  }  
    
  excluir(): void {
      if(!confirm("Deseja realmente excluir o patio selecionado?"))
        return; 
      this.patioService.excluir(this.patioSelected).then(() => {
          this.listar();
          this.messageSuccess = "O Patio "+this.patioSelected.id+" foi excluido com sucesso!";
          this.patioSelected = new Patio();
      })
  }    
    
  onSelect(patio: Patio): void {
     this.messageSuccess=null;
     this.patioSelected = patio;
  }

}
