import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-historicocliente',
  templateUrl: './historicocliente.component.html',
  styleUrls: ['./historicocliente.component.css']
})
export class HistoricoclienteComponent implements OnInit {

  searchQuery: string = '';

  constructor( private snackBar: MatSnackBar) {}

  ngOnInit() {}

  searchClients() {
    // Implementação vazia, apenas para exibir a barra de pesquisa e o botão de busca
    this.openSnackBar("Ops! funcionalidade não implementada. fique a vontade para explorar outras funcionalidades do sistema","Fechar","")
  }

  openSnackBar(message: string, action: string, panelClass: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: ['mat-toolbar', 'mat-primary']
    });
  }
}
