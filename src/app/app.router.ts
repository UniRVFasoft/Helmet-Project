import {RouterModule, Routes} from '@angular/router'
import {ClientesComponent} from './clientes/clientes/clientes.component';
import {RelatoriosComponent} from './relatorios/relatorios/relatorios.component';
import {ConfigurationComponent} from './configuration/configuration/configuration.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {TarefaComponent} from "./tarefa/tarefa.component";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {NavbarComponent} from "./navbar/navbar/navbar.component";
import {ProdutosComponent} from "./produtos/produtos.component";

const routes: Routes = [


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
