import { Injectable } from '@angular/core';
import { Permanencia } from './permanencia'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PermanenciaService {

    constructor(private http: Http) { }

    private permanenciaUrl = 'http://localhost:8080/permanencias'
    private permanenciaUrlRegistrarSaida = 'http://localhost:8080/permanencias/sair'
    private permanenciaUrlAtivos = 'http://localhost:8080/permanencias/ativos'
    private permanenciaUrlConcluidos = 'http://localhost:8080/permanencias/concluidos'
    private headers = new Headers({ 'Content-Type': 'application/json' });

    listarAtivos(): Promise<Permanencia[]> {
        return this.http.get(this.permanenciaUrlAtivos)
            .toPromise()
            .then(response => response.json() as Permanencia[])
            .catch(this.handleError);
    }
    
    listarConcluidos(): Promise<Permanencia[]> {
        return this.http.get(this.permanenciaUrlConcluidos)
            .toPromise()
            .then(response => response.json() as Permanencia[])
            .catch(this.handleError);
    }

    salvar(permanencia: Permanencia): Promise<Permanencia> {        
        return this.http.post(this.permanenciaUrl, this.permanenciaToJson(permanencia), { headers: this.headers }) 
            .toPromise()
            .then(response => response.json() as Permanencia)
            .catch(this.handleError);
    }

    registrarSaida(permanencia: Permanencia): Promise<Permanencia> {        
        return this.http.post(this.permanenciaUrlRegistrarSaida+"/"+permanencia.id, { headers: this.headers }) 
            .toPromise()
            .then(response => response.json() as Permanencia)
            .catch(this.handleError);
    }
    
    private permanenciaToJson(permanencia: Permanencia): String {
        return JSON.stringify({
            "id": permanencia.id,
            "veiculoId": permanencia.veiculo.id, 
            "clienteId": permanencia.cliente.id,
            "patioId": permanencia.patio.id,
            "dataEntrada": permanencia.dataEntrada,
            "dataSaida": permanencia.dataSaida
        });
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
    
     getPeriodoPermanencia(permanencia): String {
         if(permanencia.dataEntrada==null)
            return "0 Hora(s) e 0 Minuto(s)";
         
        let dataRef = new Date();
            
        if(permanencia.dataSaida != null)
            dataRef = new Date(permanencia.dataSaida);
                       
        let diffMin = this.getDiffEntreDatasEmMinutos(dataRef, new Date(permanencia.dataEntrada));
            
        if(diffMin < 60)
            return diffMin+" Minuto(s)";
            
         return Math.floor(diffMin / 60)+ " Hora(s) e "+Math.floor(diffMin % 60)+" Minuto(s)";    
     }
        
     getTotalAPagar(permanencia): String {
        if(permanencia.dataEntrada==null)
            return "R$ 0";
         
        let dataRef = new Date();
            
        if(permanencia.dataSaida != null)
            dataRef = new Date(permanencia.dataSaida);
            
        let diffMin = this.getDiffEntreDatasEmMinutos(dataRef, new Date(permanencia.dataEntrada));
        
        return "R$ "+ (permanencia.patio.valorTaxaHora * (diffMin/60)).toFixed(2);     
     }     
     
     private getDiffEntreDatasEmMinutos(dataIni, dataFim): number {
        if(dataIni == null || dataFim == null)
            return 0; 
        let diffMilli = Math.abs(dataFim.getTime() - dataIni.getTime());
        return Math.floor(diffMilli / (1000 * 60));         
     }       
}
