import { Cliente } from '../clientes/cliente'
import { Veiculo } from '../veiculos/veiculo'
import { Patio } from '../patios/patio'

export class Permanencia {
    id: number;
    cliente: Cliente;
    veiculo: Veiculo;
    patio: Patio;
    dataEntrada: Date;
    dataSaida: Date;
}
