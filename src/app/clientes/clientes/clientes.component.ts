import {Component, DoCheck, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatTabGroup} from "@angular/material/tabs";
import {MatSnackBar} from "@angular/material/snack-bar";


export interface Cliente {
  nome: string;
  email: string;
  cidade: string;
  estado: string;
  telefone: string;
  biografia: string;
}


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit, DoCheck {


   clientes: Array<Cliente> = JSON.parse(localStorage.getItem("list") || '[]');
  //

  label: string = "Salvar"

  updateIndice: number = 0

  updateCliente: Cliente

  form: FormGroup
  @ViewChild(MatTabGroup) tabGroup!: MatTabGroup;
  novoCliente: boolean = true;
  editCliente: boolean = false;


  ngDoCheck() {
    this.setLocalStorage()
  }

  constructor(private formBuilder: FormBuilder, private snackBar: MatSnackBar) {
    this.updateCliente = {nome: "", email: "", cidade: "", estado: "", telefone: "", biografia: ""}
    this.form = this.formBuilder.group({
      cliente: this.formBuilder.group({
        nome: ["",Validators.required],
        email: ["",Validators.required],
        cidade: ["",Validators.required],
        estado: ["",Validators.required],
        telefone: ["",Validators.required],
        teste: ["",Validators.required],
        biografia: ["",Validators.required]
      })
    });
  }

  clearInput() {
    // this.form.get('cliente.nome')?.setValue('');
    // this.form.get('cliente.email')?.setValue('');
    // this.form.get('cliente.cidade')?.setValue('');
    // this.form.get('cliente.estado')?.setValue('');
    // this.form.get('cliente.telefone')?.setValue('');
    // this.form.get('cliente.teste')?.setValue('');
    // this.form.get('cliente.biografia')?.setValue('');
    this.form = this.formBuilder.group({
      cliente: this.formBuilder.group({
        nome: ["",Validators.required],
        email: ["",Validators.required],
        cidade: ["",Validators.required],
        estado: ["",Validators.required],
        telefone: ["",Validators.required],
        teste: ["",Validators.required],
        biografia: ["",Validators.required]
      })
    });
  }


  ngOnInit() {
    this.updateIndice = -1;
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

  setLocalStorage() {
    if (this.clientes) {
      localStorage.setItem('list', JSON.stringify(this.clientes));
    }
  }
}
