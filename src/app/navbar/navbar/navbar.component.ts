import {Component, OnInit} from '@angular/core';
import {AppComponent, User} from "../../app.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  color: string = "#8a2be2";



  constructor(private app: AppComponent) {
    this.color = this.app.getColor()
  }

  getColor(): string{
    return this.color
  }

  ngOnInit() {
    this.app.userObservable.subscribe((user: User) => {
      console.log('Usuário alterado:', user);
      this.color = this.app.getColor()
    });

    this.getColor()
  }

}
