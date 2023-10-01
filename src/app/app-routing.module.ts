import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/all-products/all-products.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';

import { LoginComponent } from './auth/login/login.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { RegisterComponent } from './auth/register/register.component';
import { AddcartComponent } from './shared/addcart/addcart.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AllProductsComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent },
  { path: 'product-detail/:id', component: ProductDetailsComponent },
  { path: 'addcart', component: AddcartComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
