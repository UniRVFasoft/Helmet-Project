import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  selectedRating!: number;
  ratingCounts!: RatingCount[];

  constructor(private http: HttpClient) {}

  confirmRating() {
    // Aqui você pode enviar a avaliação para o banco de dados usando uma API HTTP
    // Supondo que você esteja usando uma API que retorna as contagens de avaliação
    // No lugar da 'URL_DA_API' inserir a url que faz ligação ao Banco de Dados para contabilizar as contagens
    this.http.get<RatingCount[]>('URL_DA_API').subscribe((response) => {
      this.ratingCounts = response;
    });
  }
}