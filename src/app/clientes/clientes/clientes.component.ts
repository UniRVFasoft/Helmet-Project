import {Component, DoCheck, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatTabGroup} from "@angular/material/tabs";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MockService} from "../../mock.service";
import {Status, Tarefa} from "../../models/tarefa.models";
import {Cliente} from "../../models/cliente.models";



export interface Estados {
  nome: string,
  sigla: string
}


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit, DoCheck {


  clientes: Array<Cliente> = JSON.parse(localStorage.getItem("list") || '[]');


  label: string = "Salvar"

  updateIndice: number = 0

  updateCliente: Cliente

  form: FormGroup
  @ViewChild(MatTabGroup) tabGroup!: MatTabGroup;
  novoCliente: boolean = true;
  editCliente: boolean = false;
  estados: Array<Estados> = [];


  ngDoCheck() {
    this.updateLocalStorage();
  }

  constructor(private formBuilder: FormBuilder, private snackBar: MatSnackBar, private service: MockService) {
    this.updateCliente = {nome: "", email: "", cidade: "", estado: "", telefone: "", biografia: ""}
    this.form = this.formBuilder.group({
      cliente: this.formBuilder.group({
        nome: ["", Validators.required],
        email: ["", Validators.required],
        cidade: ["", Validators.required],
        estado: ["", Validators.required],
        telefone: ["", Validators.required],
        cep: ["", Validators.required],
        biografia: ["", Validators.required]
      })
    });
  }



  initializeClientes() {
    this.clientes = JSON.parse(localStorage.getItem("list") || '[]');

    if (this.clientes.length === 0) {
      const exemplos = [
        {
          nome: "Lalisa Manobal",
          email: "lalisa_tailandia@email.com",
          cidade: "Rio de Janeiro",
          estado: "Rio de Janeiro",
          telefone: "+66 88 123 4567",
          biografia: "Dancer Main",
        },
        {
          nome: "Jisoo Kim",
          email: "jisoo_blackpink@email.com",
          cidade: "São Paulo",
          estado: "São Paulo",
          telefone: "+66 88 234 5678",
          biografia: "Vocalista Principal",
        },
        {
          nome: "Jennie Kim",
          email: "jennie_blackpink@email.com",
          cidade: "São Paulo",
          estado: "São Paulo",
          telefone: "+66 88 345 6789",
          biografia: "Rapper Principal",
        },
        {
          nome: "Rosé Park",
          email: "rose_blackpink@email.com",
          cidade: "São Paulo",
          estado: "São Paulo",
          telefone: "+66 88 456 7890",
          biografia: "Vocalista Principal",
        }
      ];

      this.clientes.push(...exemplos);
      this.updateLocalStorage();
    }
  }



  clearInput() {
    this.form = this.formBuilder.group({

      cliente: this.formBuilder.group({
        nome: ["", Validators.required],
        email: ["", Validators.required],
        cidade: ["", Validators.required],
        estado: ["", Validators.required],
        telefone: ["", Validators.required],
        cep: ["", Validators.required],
        biografia: ["", Validators.required]
      })
    });
  }


  getStates() {
    this.service.getStates().subscribe(
      (res: any[]) => {
        this.estados = res.map(estado => ({
          nome: estado.nome,
          sigla: estado.sigla
        }));
      },
      error => {
        console.log(error);
      }
    );
  }


  ngOnInit() {
    this.updateIndice = -1;
    this.getStates();
    this.initializeClientes();
  }


  loandingClientList(): Cliente[] {
    return this.clientes
  }


  save(form: FormGroup) {
    if (form.valid) {
      if (typeof this.updateIndice === 'number' && this.updateIndice >= 0 && this.updateIndice < this.clientes.length) {
        // Se updateIndice for um número válido, trata como o índice do cliente a ser atualizado
        const cliente = form.value.cliente;
        this.clientes.splice(this.updateIndice, 1, cliente);
        this.updateIndice = -1;
        this.label = "Salvar"
        this.tabGroup.selectedIndex = 0;
        this.openSnackBar('Cliente atualizado com sucesso', 'Fechar', 'snackbar-success');
      } else {
        // Caso contrário, trata como a criação de um novo cliente
        const novoCliente = form.value.cliente;
        this.clientes.push(novoCliente);
        this.tabGroup.selectedIndex = 0;
        this.openSnackBar('Cliente salvo com sucesso', 'Fechar', 'snackbar-success');
      }
      this.clearInput();
    } else {
      this.openSnackBar('Erro ao salvar cliente', 'Fechar', 'snackbar-error');
    }
  }


  openSnackBar(message: string, action: string, panelClass: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: ['mat-toolbar', 'mat-primary']
    });
  }


  excluirCliente(i: number) {
    this.clientes.splice(i, 1)
    this.openSnackBar('Cliente excluido', 'Fechar', 'snackbar-error');
  }


  forEditClientePage(i: number) {
    this.label = "Salvar Alteração"
    this.updateIndice = i;
    console.log("Índice:", i);
    console.log("Cliente para ser alterado:", this.clientes[i]);

    // Verifica se o índice está dentro do intervalo válido
    if (i >= 0 && i < this.clientes.length) {
      const cliente = this.clientes[i];
      // Popula os valores do formulário com base no cliente selecionado
      this.form.patchValue({
        cliente: {
          nome: cliente.nome,
          email: cliente.email,
          cidade: cliente.cidade,
          estado: cliente.estado,
          telefone: cliente.telefone,
          biografia: cliente.biografia
        }
      });
      this.tabGroup.selectedIndex = 1;
    }
  }


  getClientes(): Array<Cliente> {
    return this.clientes
  }

  updateLocalStorage() {
    localStorage.setItem("list", JSON.stringify(this.clientes));
  }


  setLocalStorage() {
    if (this.clientes) {
      localStorage.setItem('list', JSON.stringify(this.clientes));
    }
  }
}
