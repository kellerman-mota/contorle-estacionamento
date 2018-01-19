import { Component, OnInit } from '@angular/core';
import { ClienteService } from './cliente.service'
import { Cliente } from './cliente'

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {  

  constructor(private clienteService: ClienteService) {  	
  }

  ngOnInit() {
     this.listar();
  }

  clienteSelected: Cliente;
  clientes: Cliente[];
  messageSuccess: String;  

  listar(): void {     
     this.clienteService.listar().then(clientes => this.clientes = clientes);       
  }  
    
  prepararIncluir(): void {
      this.messageSuccess=null;      
      this.clienteSelected = new Cliente();              
  }      
    
  salvar(): void {
      this.clienteService.salvar(this.clienteSelected).then(clientes => {
          this.listar();
          this.clienteSelected = new Cliente();
          this.messageSuccess = "Cliente Salvo Com sucesso!";
      })
  }  
    
  excluir(): void {
      if(!confirm("Deseja realmente excluir o cliente selecionado?"))
        return; 
      this.clienteService.excluir(this.clienteSelected).then(() => {
          this.listar();
          this.messageSuccess = "O Cliente "+this.clienteSelected.id+" foi excluido com sucesso!";
          this.clienteSelected = new Cliente();
      })
  }    
    
  onSelect(cliente: Cliente): void {
     this.messageSuccess=null;
     this.clienteSelected = cliente;
  }


}
