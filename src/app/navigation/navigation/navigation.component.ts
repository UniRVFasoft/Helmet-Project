import {Component, OnInit} from '@angular/core';
import {AppComponent, User} from "../../app.component";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  userView: User

  constructor(private app: AppComponent) {
    this.userView = {}
  }

  ngOnInit() {
    this.userView = this.app.getUser()
  }

}
