import { Component } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {

  products: any[] = [
    {
      name: 'Notebook Kimano XP33',
      description: 'Computador portátil de fácil utilidade',
      price: 3999,
      image: '/assets/compuiter.jpg'
    },
    {
      name: 'Tênis Kimano Party Pool',
      description: 'Elegante e confortável',
      price: 499,
      image: '/assets/tenis.jpg'
    },
    {
      name: 'Fone Kimano RedBan',
      description: 'Áudio imersivo para seu prazer auditivo',
      price: 199,
      image: '/assets/phone.jpg'
    }
  ];



  // loadProducts(): void {
  //   this.http.get<any>('URL_DA_API/catalog')
  //     .subscribe(response => {
  //       this.products = response.products;
  //     });
  // }
}
