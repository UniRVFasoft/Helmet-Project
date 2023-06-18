import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {SensitiveData} from "../security/sensitive-data";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: FormGroup
  hasAccess: boolean = false;

  constructor(private formBuilder: FormBuilder,private router: Router) {
    this.form = this.formBuilder.group({
      login: this.formBuilder.group({
        email: ["", Validators.required],
        password: ["", Validators.required]
      })
    });
  }

  // login(form: FormGroup) {
  //   const data = new SensitiveData()
  //   if (form.value.login.email === data.email && form.value.login.password === data.password){
  //     console.log("sim os dados correspodem")
  //     this.hasAccess = false
  //     this.router.navigate(['/route']);
  //     console.log("ta chegando")
  //   }else{
  //     this.hasAccess = true
  //   }
  //   console.log("aqui o user a ser logado", form.value.login)
  // }

  login(form: FormGroup) {
    const data = new SensitiveData();
    if (form.value.login.email === data.email && form.value.login.password === data.password) {
      console.log("Sim, os dados correspondem");
      this.router.navigate(['/home']); // Redirecionar para a rota '/clientes' (ou qualquer outra rota do sistema)
    } else {
      console.log("Os dados não correspondem");
    }
  }
}
