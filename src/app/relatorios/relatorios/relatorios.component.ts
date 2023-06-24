import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Chart, ChartTypeRegistry } from 'chart.js';

@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.css']
})
export class RelatoriosComponent implements OnInit, AfterViewInit {
  topSellingProducts: any[] = [
    { name: 'Fone Kimano RedBan', quantity: 50 },
    { name: 'Fone Kimano RedBan', quantity: 40 },
    { name: 'Tênis Kimano Party Pool', quantity: 35 },
    { name: 'Tênis Kimano Party Pool', quantity: 30 },
    { name: 'Tênis Kimano Party Pool', quantity: 25 }
  ];

  newCustomers: any[] = [
    { name: 'Lalisa', email: 'lalisa@email.com', registrationDate: new Date() },
    { name: 'Carolina', email: 'carolina@email.com', registrationDate: new Date() },
    { name: 'Renan', email: 'renan@email.com', registrationDate: new Date() },
    { name: 'Rhanyel', email: 'rhanyel@email.com', registrationDate: new Date() },
    { name: 'Victor', email: 'victor@email.com', registrationDate: new Date() }
  ];

  monthlySalesChart!: Chart<keyof ChartTypeRegistry, number[], string>; // Adição do modificador !

  ngOnInit() {

  }

  ngAfterViewInit() {
    // Atualiza o gráfico após a visualização ser inicializada
    this.monthlySalesChart.update();
  }
}
