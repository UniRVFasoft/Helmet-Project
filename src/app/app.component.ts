import {Component, OnInit} from '@angular/core';

export interface User {
  nome?: string
  senha?: string
  avatar?: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public user: User;

  constructor() {
    this.user = {nome: "Owner user", senha: "materiaPoo"}
  }

  getUser(): User {
    return this.user
  }

  setUser(user: User) {

  }

  ngOnInit(): void {
    this.getUser()
  }


}
