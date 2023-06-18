import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AppComponent, User} from "../../app.component";


@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {


  form: FormGroup

  user: User
  avatar: Array<string> = ["Feminino", "Masculino"];
  themes : Array<string> = ["Violeta", "Laranja","Azul"];

  constructor(private builder: FormBuilder, private appComponente: AppComponent) {
    this.user = this.appComponente.user
    this.form = this.builder.group({
      updateUser: this.builder.group({
        nome: ["",Validators.required],
        email: ["",Validators.required],
        senha: ["",Validators.required],
        avatar: ["",Validators.required],
        cor: ["",Validators.required],

      })

    })
  }

  updateUser(userUpdate: User) {
    this.user = userUpdate
  }

  ngOnInit(): void {

  }

  clearForm(){
    this.form = this.builder.group({
      updateUser: this.builder.group({
        nome: ["",Validators.required],
        email: ["",Validators.required],
        senha: ["",Validators.required],
        avatar: ["",Validators.required],
        cor: ["",Validators.required],

      })

    })
  }

  setUser(user: FormGroup) {
    if (user.valid){
      const userUpdate: User = {}
      userUpdate.nome = user.value.updateUser.nome
      userUpdate.senha = user.value.updateUser.senha
      if (user.value.updateUser.avatar === "Feminino") {
        userUpdate.avatar = "/assets/profile-female.svg"
      } else if (user.value.updateUser.avatar === "Masculino") {
        userUpdate.avatar = "/assets/masc-avatar.svg"
      }
      //color
      //// color: purple = "#8a2be2";
      //// color: orange = "#FFA726";
      //color: blue = "#1369C9";

      if (user.value.updateUser.cor === "Violeta") {
        userUpdate.cor = "#8a2be2"
      } else if (user.value.updateUser.cor === "Laranja") {
        userUpdate.cor = "#FFA726"
      } else if (user.value.updateUser.cor === "Azul") {
        userUpdate.cor = "#1369C9"
      }
      this.appComponente.setUser(userUpdate);
      this.updateUser(userUpdate)
      this.clearForm()
    }


  }


}
