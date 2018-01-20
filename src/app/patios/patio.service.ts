import { Injectable } from '@angular/core';
import { Patio } from './patio'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class PatioService {

    constructor(private http: Http) { }

   private patiosUrl = 'http://localhost:8080/patios';
   private patiosUrlCountVagas = 'http://localhost:8080/patios/count/vagas';
   private patiosUrlCount = 'http://localhost:8080/patios/count';
   private headers = new Headers({ 'Content-Type': 'application/json' });
    
   count(): Promise<number> {          
       return this.http.get(this.patiosUrlCount)
               .toPromise()
               .then(response => response.json() as number)                    
               .catch(this.handleError);
   }
   
   countVagas(): Promise<number> {          
       return this.http.get(this.patiosUrlCountVagas)
               .toPromise()
               .then(response => response.json() as number)                    
               .catch(this.handleError);
   }

    listar(): Promise<Patio[]> {
        return this.http.get(this.patiosUrl)
            .toPromise()
            .then(response => response.json() as Patio[])
            .catch(this.handleError);
    }

    salvar(patio: Patio): Promise<Patio> {
        let patioJson = JSON.stringify({
            "id": patio.id,
            "descricao": patio.descricao,
            "quantidadeTotalVagas": patio.quantidadeTotalVagas,
            "valorTaxaHora": patio.valorTaxaHora
        });
        return this.http.post(this.patiosUrl, patioJson, { headers: this.headers })
            .toPromise()
            .then(response => {
                response.json() as Patio[]
            })
            .catch(this.handleError);
    }

    excluir(patio: Patio): Promise<Patio> {
        return this.http.delete(this.patiosUrl + "/" + patio.id, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
