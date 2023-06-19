import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatRadioModule} from '@angular/material/radio';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarComponent} from './navbar/navbar/navbar.component';
import {NavigationComponent} from './navigation/navigation/navigation.component';
import {RoutingModule} from './app.router';
import {ClientesComponent} from './clientes/clientes/clientes.component';
import {ContatosComponent} from './contatos/contatos/contatos.component';
import {PedidosComponent} from './pedidos/pedidos/pedidos.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RelatoriosComponent} from './relatorios/relatorios/relatorios.component';
import {ConfigurationComponent} from './configuration/configuration/configuration.component';
import {DashboardComponent} from './dashboard/dashboard/dashboard.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatMenuModule} from "@angular/material/menu";
import {CommonModule} from "@angular/common";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {TarefaComponent} from "./tarefa/tarefa.component";
import {ProdutosComponent} from './produtos/produtos.component';
import {MatSelectModule} from "@angular/material/select";
import {LoginComponent} from './login/login.component';
import {MatCardModule} from "@angular/material/card";
import {RouteComponent} from './route/route.component';
import {HomeComponent} from './home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {MatListModule} from "@angular/material/list";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavigationComponent,
    ClientesComponent,
    ContatosComponent,
    PedidosComponent,
    RelatoriosComponent,
    ConfigurationComponent,
    DashboardComponent,
    WelcomeComponent,
    TarefaComponent,
    ProdutosComponent,
    LoginComponent,
    RouteComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    RoutingModule,
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatSnackBarModule,
    MatIconModule,
    MatTabsModule,
    CommonModule,
    HttpClientModule,
    MatRadioModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSelectModule,
    MatCardModule,
    MatListModule,
  ],
  providers: [
    ClientesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
