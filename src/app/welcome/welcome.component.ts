import {Component, OnInit} from '@angular/core';
import {AppComponent, User} from "../app.component";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{

  user:User = {}

  constructor( private appComponente: AppComponent) {
  }

  ngOnInit(): void {
    this.user = this.appComponente.getUser()
  }


}
