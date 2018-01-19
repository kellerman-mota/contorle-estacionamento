import { Injectable } from '@angular/core';
import { Veiculo } from './veiculo'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class VeiculoService {

   constructor(
  private http: Http) { }
    
  private veiculosUrl= 'http://localhost:8080/veiculos'  
  private headers = new Headers({'Content-Type': 'application/json'});

  listar(): Promise<Veiculo[]> {          
       return this.http.get(this.veiculosUrl)
               .toPromise()
               .then(response => response.json() as Veiculo[])                    
               .catch(this.handleError);
  }
  
  salvar(veiculo: Veiculo): Promise<Veiculo> {
     let veiculoJson = JSON.stringify({
         "id": veiculo.id,
         "placa": veiculo.placa, 
         "modelo":veiculo.modelo, 
         "cor": veiculo.cor
     }); 
     return this.http.post(this.veiculosUrl, veiculoJson, {headers: this.headers})
           .toPromise()
           .then(response => {               
               response.json() as Veiculo[]
            })                    
           .catch(this.handleError);
  }    
    
   excluir(veiculo: Veiculo): Promise<Veiculo> {
     return this.http.delete(this.veiculosUrl+"/"+veiculo.id, {headers: this.headers})
           .toPromise()
           .then(() => null)                    
           .catch(this.handleError);
  }      
   
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
