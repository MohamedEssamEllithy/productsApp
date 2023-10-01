import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/product';
import { ProductserviceService } from 'src/app/productservice.service';

@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.css'],
})
export class AddcartComponent {
  myArray!: Product[];
  foundeduser!: Product;
  quantity: number = 0;
  cost: number = 0;
  totalPrice: number = 0;

  constructor(
    private ActivedRout: ActivatedRoute,
    private _productservice: ProductserviceService
  ) {}

  ngOnInit() {
    this.myArray = this._productservice.myCart;
        this.calculateTotalPrice();
  }

  increQuantity(id: number) {
    this.myArray.forEach((element: any) => {
      if (element.id == id) {
        element.quantity++;
        
        console.log(element.quantity);
        this._productservice.incrementCounter();
            this.calculateTotalPrice();
      }
    });
  }

  decreQuantity(id: number) {
    this.myArray.forEach((element: any, index) => {
      if (element.id == id) {
        if (element.quantity <= 1) {
          this.myArray.splice(index, 1);
        } else {
          element.quantity--;
          this._productservice.decrementCounter();
              this.calculateTotalPrice();
        }
      }
    });
  }

  private calculateTotalPrice() {
    this.totalPrice = this.myArray.reduce(
      (total, item:any) => total + item.price * item.quantity,
      0
    );
  }
}
