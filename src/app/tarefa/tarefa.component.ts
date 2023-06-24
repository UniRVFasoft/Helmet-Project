import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatTabGroup} from "@angular/material/tabs";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Status, Tarefa} from "../models/tarefa.models";
import {Cliente} from "../models/cliente.models";
import {ClientesComponent} from "../clientes/clientes/clientes.component";


@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {

  selectedCliente: Cliente;
  selectedStatus: Status;
  form: FormGroup
  tarefas: Array<Tarefa> = []

  status: Status[] = [Status.ANDAMENTO, Status.PENDENTE, Status.CONCLUIDA]


  clientes: Array<Cliente> = []

  @ViewChild(MatTabGroup) tabGroup!: MatTabGroup;
  label: string = "Salvar tarefa";

  constructor(private formBuilder: FormBuilder, private snackBar: MatSnackBar, private clientComponente: ClientesComponent) {
    this.selectedCliente = {nome: "", email: "", estado: "", cidade: "", telefone: "", biografia: ""}
    this.selectedStatus = Status.PENDENTE
    this.form = this.formBuilder.group({
      tarefa: this.formBuilder.group({
        titulo: ['',Validators.required],
        descricao: ['',Validators.required],
        data_vencimento: ['',Validators.required],
        status: ['',Validators.required],
        cliente: ['',Validators.required]
      })
    });
  }

  ngOnInit(): void {
    this.clientes = this.clientComponente.getClientes()
    console.log("aqui a lista de clientes",this.clientes)
    // Iniciar duas tarefas de exemplo
    const tarefa1: Tarefa = {
      titulo: 'Mensalidade',
      descricao: 'Pagamento Mensalidade',
      data_vencimento: "11/10/2023",
      status: Status.PENDENTE,
      cliente: {
        nome: 'João Smith',
        email: 'joao@email.com',
        cidade: 'São Paulo',
        estado: 'São Paulo',
        telefone: '123456789',
        biografia: 'Biografia do Cliente 1'
      }
    };
    this.tarefas.push(tarefa1)

    const tarefa2: Tarefa = {
      titulo: 'Proposta',
      descricao: 'Apresentação proposta',
      data_vencimento: "02/06/2023",
      status: Status.ANDAMENTO,
      cliente: {
        nome: 'John Doe',
        email: 'johndoe@example.com',
        cidade: 'São Paulo',
        estado: 'São Paulo',
        telefone: '(11) 98765-4321',
        biografia: 'Sou um desenvolvedor web apaixonado por tecnologia e sempre em busca de aprender coisas novas.'
      }
    };

    this.tarefas.push(tarefa2)

  }

  save(form: FormGroup) {
    if (form.valid) {
      const tarefa = form.value.tarefa;
      this.tarefas.push(tarefa);
      console.log(tarefa)
      this.openSnackBar("Tarefa salva com sucesso !", "Fechar")
      this.tabGroup.selectedIndex = 0;

    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      horizontalPosition: 'end',
      verticalPosition: 'top'
    });
  }

  editarTarefa(tarefa: any) {
    console.log("teste")

  }

  excluirTarefa(index: number) {
    this.tarefas.splice(index,1)
    this.openSnackBar("Tarefa excluida com sucesso !","Fechar")
  }
}
