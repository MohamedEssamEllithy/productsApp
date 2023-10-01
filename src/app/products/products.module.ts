import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './all-products/all-products.component';
import { CardComponent } from './card/card.component';
import { ProductDetailsComponent } from './product-details/product-details.component';





@NgModule({
  declarations: [
    AllProductsComponent,
    CardComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
