import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Chart, ChartTypeRegistry } from 'chart.js';

@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.css']
})
export class RelatoriosComponent implements OnInit, AfterViewInit {
  topSellingProducts: any[] = [
    { name: 'Produto A', quantity: 50 },
    { name: 'Produto B', quantity: 40 },
    { name: 'Produto C', quantity: 35 },
    { name: 'Produto D', quantity: 30 },
    { name: 'Produto E', quantity: 25 }
  ];

  newCustomers: any[] = [
    { name: 'Cliente A', email: 'clienteA@example.com', registrationDate: new Date() },
    { name: 'Cliente B', email: 'clienteB@example.com', registrationDate: new Date() },
    { name: 'Cliente C', email: 'clienteC@example.com', registrationDate: new Date() },
    { name: 'Cliente D', email: 'clienteD@example.com', registrationDate: new Date() },
    { name: 'Cliente E', email: 'clienteE@example.com', registrationDate: new Date() }
  ];

  monthlySalesChart!: Chart<keyof ChartTypeRegistry, number[], string>; // Adição do modificador !

  ngOnInit() {
    // Dados simulados para as vendas mensais
    const monthlySalesData = [100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650];

    // Configuração do gráfico
    const chartOptions = {
      type: 'line' as const, // Alteração do tipo para a constante do ChartTypeRegistry
      data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        datasets: [
          {
            label: 'Vendas Mensais',
            data: monthlySalesData,
            backgroundColor: 'rgba(0, 123, 255, 0.3)',
            borderColor: 'rgba(0, 123, 255, 0.7)',
            borderWidth: 2
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };

    // Criação do gráfico
    this.monthlySalesChart = new Chart('monthly-sales-chart', chartOptions);
  }

  ngAfterViewInit() {
    // Atualiza o gráfico após a visualização ser inicializada
    this.monthlySalesChart.update();
  }
}
