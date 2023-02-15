import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/types/login.interface';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: LoginForm = {
    email: '',
    password: '',
  };

  isLoading: boolean = false

  constructor() {}

  ngOnInit(): void {}

  submit() {
    this.isLoading = true
    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.form.email, this.form.password)
      .then((userCredential) => {
        alert('Yeahhh login success')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Credentials does not match our record');
      }).finally(() => (this.isLoading = false))
  }
}
