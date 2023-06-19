import {RouterModule, Routes} from '@angular/router'
import {ClientesComponent} from './clientes/clientes/clientes.component';
import {RelatoriosComponent} from './relatorios/relatorios/relatorios.component';
import {ConfigurationComponent} from './configuration/configuration/configuration.component';
import {PedidosComponent} from './pedidos/pedidos/pedidos.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {TarefaComponent} from "./tarefa/tarefa.component";
import {LoginComponent} from "./login/login.component";
import {RouteComponent} from "./route/route.component";
import {AppComponent} from "./app.component";
import {NavigationComponent} from "./navigation/navigation/navigation.component";
import {HomeComponent} from "./home/home.component";
import {NavbarComponent} from "./navbar/navbar/navbar.component";
import {ProdutosComponent} from "./produtos/produtos.component";

const routes: Routes = [

  //<a href="#">Clientes</a>
  //<a href="#">Contatos</a>
  //<a href="#">Pedidos</a>
  //<a href="#">Relatorios</a>
  //<a href="#">Configurações</a>

  //home
  // {
  //   path: '',
  //   component: LoginComponent
  // },
  // {
  //   path: 'clientes',
  //   component: ClientesComponent
  // },
  // {
  //   path: 'tarefa',
  //   component: TarefaComponent
  // },
  // {
  //   path: 'relatorios',
  //   component: RelatoriosComponent
  // },
  // {
  //   path: 'configuration',
  //   component: ConfigurationComponent
  // },
  // {
  //   path: 'pedidos',
  //   component: PedidosComponent
  // },
  // {
  //   path: 'login',
  //   component: LoginComponent
  // },
  // {
  //   path: 'route',
  //   component: ClientesComponent
  // }

  // Rota de login
  {
    path: '',
    component: LoginComponent
  },
  // Outras rotas do sistema

  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'clientes',
        component: ClientesComponent
      },
      {
        path: 'tarefa',
        component: TarefaComponent
      },
      {
        path: 'relatorios',
        component: RelatoriosComponent
      },
      {
        path: 'configuration',
        component: ConfigurationComponent
      },
      {
        path: 'pedidos',
        component: PedidosComponent
      },
      {
        path: 'produtos',
        component: ProdutosComponent
      },
      {
        path: 'welcome',
        component: WelcomeComponent
      },
      {
        path: 'navbar',
        component: NavbarComponent
      }
    ]
  }


];
export const RoutingModule = RouterModule.forRoot(routes);
