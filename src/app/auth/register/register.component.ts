import { Component } from '@angular/core';

import { RegisterForm } from 'src/app/types/register.interface';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {

  constructor(private authService: AuthService){}

  form: RegisterForm = {
    email: '',
    password: '',
    confirnPassword: '',
  };

  submit() {
    this.authService.register(this.form)
  }
  isLoading(){
    return this.authService.isLoading
  }
}
