import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from "@angular/material/snack-bar";

interface RatingCount {
  rating: number;
  count: number;
}

@Component({
  selector: 'app-funcionalidade',
  templateUrl: './funcionalidade.component.html',
  styleUrls: ['./funcionalidade.component.css']
})
export class FuncionalidadeComponent {

  selectedRating: number = 0;
  ratingCounts!: RatingCount[];
  avaliation: number = 0;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
  }

  confirmRating() {
    this.avaliation = this.selectedRating
    console.log(this.selectedRating)
    this.openSnackBar('Site avaliado com sucesso!', 'Fechar', 'snackbar-success');
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
