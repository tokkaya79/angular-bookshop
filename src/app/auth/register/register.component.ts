import { Component } from '@angular/core';
import { RegisterForm } from 'src/app/types/register.interface';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  form: RegisterForm = {
    email: '',
    password: '',
    confirnPassword: '',
  };

  passwordMatched: boolean = true;
  isLoading: boolean = false

  submit() {
    this.isLoading = true
    if (this.form.password !== this.form.confirnPassword) {
      this.passwordMatched = false;
      return;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.form.email, this.form.password)
      .then((userCredential) => {
        console.log(userCredential);

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      }).finally(() => (this.isLoading = false))
  }
}
