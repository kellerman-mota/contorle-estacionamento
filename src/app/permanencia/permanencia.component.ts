import { Component, OnInit } from '@angular/core';
import { PermanenciaService } from './permanencia.service'
import { Permanencia } from './permanencia'

import { ClienteService } from '../clientes/cliente.service'
import { Cliente } from '../clientes/cliente'
import { PatioService } from '../patios/patio.service'
import { Patio } from '../patios/patio'
import { VeiculoService } from '../veiculos/veiculo.service'
import { Veiculo } from '../veiculos/veiculo'

@Component({
    selector: 'app-permanencia',
    templateUrl: './permanencia.component.html',
    styleUrls: ['./permanencia.component.css']
})
export class PermanenciaComponent implements OnInit {

    constructor(
        private permanenciaService: PermanenciaService,
        private clienteService: ClienteService,
        private veiculoService: VeiculoService,
        private patioService: PatioService) {
    }

    ngOnInit() {        
        this.selecionarFiltroDefault();
        this.listarClientes();
        this.listarPatios();
        this.listarVeiculos();
        this.listar();
    }

    permanenciaSelected: Permanencia;
    permanencias: Permanencia[];
    clientes: Cliente[];
    veiculos: Veiculo[];
    patios: Patio[];
    filtros: String[] = ["Ativos", "Concluidos"];
    filtroSelecionado: String;
    
    messageSuccess: String;

    listar(): void {
        if(this.filtroSelecionado==this.filtros[0])
            this.permanenciaService.listarAtivos().then(permanencias => this.permanencias = permanencias);
        if(this.filtroSelecionado==this.filtros[1])
            this.permanenciaService.listarConcluidos().then(permanencias => this.permanencias = permanencias);
    }

    listarClientes(): void {
        this.clienteService.listar().then(clientes => this.clientes = clientes);
    }
    listarPatios(): void {
        this.veiculoService.listar().then(veiculos => this.veiculos = veiculos);
    }
    listarVeiculos(): void {
        this.patioService.listar().then(patios => this.patios = patios);
    }

    prepararIncluir(): void {
        this.messageSuccess = null;
        this.permanenciaSelected = new Permanencia();
        this.permanenciaSelected.cliente = new Cliente();
        this.permanenciaSelected.veiculo = new Veiculo();
        this.permanenciaSelected.patio = new Patio();
    }

    salvar(): void {
        this.permanenciaService.salvar(this.permanenciaSelected).then(permanencia => {
            this.listar();
            this.permanenciaSelected = permanencia;
            this.messageSuccess = "Permanencia Salva Com sucesso!";
        })
    }

    registrarSaida(): void {
        if (!confirm("Deseja realmente registrar saída da permanencia selecionada?"))
            return;
                this.permanenciaService.registrarSaida(this.permanenciaSelected).then(permanencia => {
                    this.listar();
                    this.messageSuccess = "A saida da permanencia " + this.permanenciaSelected.id + " foi realizada com sucesso!";
                    this.permanenciaSelected = permanencia;
        })
    }

    onSelect(permanencia: Permanencia): void {
        this.messageSuccess = null;
        this.permanenciaSelected = permanencia;
    }

    onSelectCliente(clienteId) {        
        for (var i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].id == clienteId) {
                this.permanenciaSelected.cliente = this.clientes[i];
            }
        }
    }
    
    onSelectVeiculo(veiculoId) {        
        for (var i = 0; i < this.veiculos.length; i++) {
            if (this.veiculos[i].id == veiculoId) {
                this.permanenciaSelected.veiculo = this.veiculos[i];
            }
        }
    }
    
    onSelectPatio(patioId) {        
        for (var i = 0; i < this.patios.length; i++) {
            if (this.patios[i].id == patioId) {
                this.permanenciaSelected.patio = this.patios[i];
            }
        }
    }
    
    onSelectFiltro(filtro) {       
        this.listar();
        this.permanenciaSelected = null;
    }
    
    selecionarFiltroDefault() {
        this.filtroSelecionado = this.filtros[0];    
    }
    
    isPermanenciaAtiva(permanencia): boolean{
        if(permanencia==null) return false;
        return permanencia.dataSaida == null;
    }
    
     getPeriodoPermanenciaEmHoras(permanencia): String {
        return this.permanenciaService.getPeriodoPermanencia(permanencia);      
    }
    
    getTotalAPagar(permanencia): String{
        return this.permanenciaService.getTotalAPagar(permanencia);
    }

}
