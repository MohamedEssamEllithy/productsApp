import {  Router } from '@angular/router';
import { Product } from './../../product';
import { Component, Input } from '@angular/core';
import { ProductserviceService } from 'src/app/productservice.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() productdetail!: Product;
  cart: Array<any> = [];
  constructor(private router: Router ,private _productservice :ProductserviceService) {}

  redirectToProduct(id: number) {
    this.router.navigate(['product-detail', id]);
  }
  addTocart() {
    if(!this.productdetail.quantity ){
this.productdetail.quantity = 1;
this._productservice.myCart.push(this.productdetail);
   this._productservice.incrementCounter();


    }else{
      this.productdetail.quantity++
       this._productservice.incrementCounter();
    
    }
    
      
  }
}

