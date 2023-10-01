import { Product } from './../../product';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import dataProducts from '../../../assets/products-list.json';
import { ProductserviceService } from 'src/app/productservice.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  id!: number;
  Allproducts: Product[] = dataProducts;
  productFounded !: any

  constructor(private ActivedRout: ActivatedRoute ,private _productservice :ProductserviceService) {}
  ngOnInit() {
    this.id = this.ActivedRout.snapshot.params['id'];
  this._productservice.getProductDetails(this.id).subscribe((res)=>{
    this.productFounded =res 
    console.log(this.productFounded);
  })
  }
}
