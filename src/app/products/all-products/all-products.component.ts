import { ProductserviceService } from 'src/app/productservice.service';
import { Product } from './../../product';
import { Component } from '@angular/core';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent {
  productsList =[]
  constructor(private _productservice : ProductserviceService){}
  ngOnInit(){
    this._productservice.getproductList().subscribe((res :any) => {
      this.productsList = res.products
    });
  }
}
