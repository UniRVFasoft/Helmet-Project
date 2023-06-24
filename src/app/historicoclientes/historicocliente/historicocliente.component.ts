import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historicocliente',
  templateUrl: './historicocliente.component.html',
  styleUrls: ['./historicocliente.component.css']
})
export class HistoricoclienteComponent implements OnInit {

  searchQuery: string = '';

  constructor() {}

  ngOnInit() {}

  searchClients() {
    // Implementação vazia, apenas para exibir a barra de pesquisa e o botão de busca
  }
}