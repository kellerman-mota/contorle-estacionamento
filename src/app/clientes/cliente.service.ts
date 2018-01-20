import { Injectable } from '@angular/core';
import { Cliente } from './cliente'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ClienteService {

  constructor(
  private http: Http) { }
    
  private clientesUrl= 'http://localhost:8080/clientes'  
  private clientesUrlCount= 'http://localhost:8080/clientes/count'  
  private headers = new Headers({'Content-Type': 'application/json'});
    
  count(): Promise<number> {          
       return this.http.get(this.clientesUrlCount)
               .toPromise()
               .then(response => response.json() as number)                    
               .catch(this.handleError);
  }

  listar(): Promise<Cliente[]> {          
       return this.http.get(this.clientesUrl)
               .toPromise()
               .then(response => response.json() as Cliente[])                    
               .catch(this.handleError);
  }
  
  salvar(cliente: Cliente): Promise<Cliente> {
     let clienteJson = JSON.stringify({
         "id": cliente.id,
         "nome": cliente.nome, 
         "cpf":cliente.cpf, 
         "telefone":cliente.telefone
     }); 
     return this.http.post(this.clientesUrl, clienteJson, {headers: this.headers})
           .toPromise()
           .then(response => {               
               response.json() as Cliente[]
            })                    
           .catch(this.handleError);
  }    
    
   excluir(cliente: Cliente): Promise<Cliente> {
     return this.http.delete(this.clientesUrl+"/"+cliente.id, {headers: this.headers})
           .toPromise()
           .then(() => null)                    
           .catch(this.handleError);
  }      
   
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
