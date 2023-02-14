import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/types/login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 form: LoginForm = {
  email: '',
  password: ''
 }

 constructor() {}

 ngOnInit(): void {}

 submit(){
  console.log(this.form)
 }
}
