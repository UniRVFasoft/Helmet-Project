import {RouterModule, Routes} from '@angular/router'
import {ClientesComponent} from './clientes/clientes/clientes.component';
import {RelatoriosComponent} from './relatorios/relatorios/relatorios.component';
import {ConfigurationComponent} from './configuration/configuration/configuration.component';
import {PedidosComponent} from './pedidos/pedidos/pedidos.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {TarefaComponent} from "./tarefa/tarefa.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [

  //<a href="#">Clientes</a>
  //<a href="#">Contatos</a>
  //<a href="#">Pedidos</a>
  //<a href="#">Relatorios</a>
  //<a href="#">Configurações</a>

  //home
  {
    path: '',
    component: WelcomeComponent
  },
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
  }

];
export const RoutingModule = RouterModule.forRoot(routes);
