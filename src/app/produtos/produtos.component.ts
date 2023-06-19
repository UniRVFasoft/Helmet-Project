import { Component } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {

  products: any[] = [
    {
      name: 'Notebook Kimano xp33',
      description: 'Descrição do Produto 1',
      price: 3999,
      image: '/assets/compuiter.jpg'
    },
    {
      name: 'Tênis Kimano Party Pool',
      description: 'Descrição do Produto 2',
      price: 499,
      image: '/assets/tenis.jpg'
    },
    {
      name: 'Fone Kimano redBan',
      description: 'Descrição do Produto 3',
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
