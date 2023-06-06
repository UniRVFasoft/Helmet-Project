// título, descrição, data de vencimento, status (pendente, concluída, em andamento), cliente associado, etc.

import {Cliente} from "./cliente.models";
import {Data} from "@angular/router";

export interface Tarefa {

  titulo: string
  descricao: string
  data_vencimento: string
  status: Status
  cliente: Cliente

}

export enum Status {
  PENDENTE = 'PENDENTE',
  CONCLUIDA = 'CONCLUIDA',
  ANDAMENTO = 'ANDAMENTO'
}
