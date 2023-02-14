import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { BooksComponent } from "src/app/books/books.component";
import { CartComponent } from "src/app/cart/cart.component";
import { LoginComponent } from "src/app/auth/login/login.component";
import { RegisterComponent } from "src/app/auth/register/register.component";

const routes: Routes = [
  {path:'', component: BooksComponent},
  {path:'cart', component: CartComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
