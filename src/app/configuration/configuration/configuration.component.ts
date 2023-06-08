import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AppComponent, User} from "../../app.component";


@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {


  form: FormGroup

  user: User

  constructor(private builder: FormBuilder, private appComponente: AppComponent) {
    this.user = this.appComponente.user
    this.form = this.builder.group({
      updateUser: this.builder.group({
        email: [],
        senha: [],
        avatar: []
      })

    })
  }

  setNome(nome: string) {
    this.user.nome = nome
  }


  ngOnInit(): void {

  }

}
