import {Component, OnInit} from '@angular/core';
import {Observable, Subject} from "rxjs";

export interface User {
  nome?: string
  senha?: string
  avatar?: string
  cor?: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public user: User = {};

  private userSubject: Subject<User> = new Subject<User>();

  public userObservable: Observable<User> = this.userSubject.asObservable();


  constructor() {
    this.user = {nome: "Owner user", senha: "materiaPoo", avatar: "/assets/masc-avatar.svg", cor: "#8a2be2"}
  }

  getUser(): User {
    return this.user
  }

  getColor(): string {
    return <string>this.user.cor
  }

  setUser(user: User): User {
    const userUpdate: User = {}
    userUpdate.nome = user.nome
    userUpdate.senha = user.senha
    userUpdate.avatar = user.avatar
    userUpdate.cor = user.cor
    this.user = userUpdate
    console.log("chegou aqui ? no service", this.user)
    this.userSubject.next(this.user);
    this.getUser()
    return user;
  }


  ngOnInit(): void {
    this.getUser()
  }


}
