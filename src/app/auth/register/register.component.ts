import { Component } from '@angular/core';
import { RegisterForm } from 'src/app/types/register.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  form: RegisterForm = {
      email: '',
      password: '',
      confirnPassword: ''
  }
  submit() {
    console.log(this.form);

  }

}
