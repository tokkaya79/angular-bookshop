import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import { LoginForm } from 'src/app/types/login.interface';
import { RegisterForm } from 'src/app/types/register.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated: boolean = false;
  isLoading: boolean = false;
  passwordMatched: boolean = true;

  constructor(private router: Router) {}

  login(form: LoginForm) {
    if (this.isLoading) return;
    this.isLoading = true;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        this.isAuthenticated = true
        this.router.navigate([''])
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated = false
      })
      .finally(() => (this.isLoading = false));
  }

  register(form: RegisterForm) {
    this.isLoading = true;
    if (form.password !== form.confirnPassword) {
      this.passwordMatched = false;
      return;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        this.isAuthenticated = true
      })
      .catch((error) => {
        this.isAuthenticated = false
        const errorCode = error.code;
        const errorMessage = error.message;
      })
      .finally(() => (this.isLoading = false));
  }
  logout(){
    const auth = getAuth()

    signOut(auth).then(() => {
      this.router.navigate(['login'])
      this.isAuthenticated = false
    }).catch((error) => {

    })
  }
}
