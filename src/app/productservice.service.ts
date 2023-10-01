import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Product } from './product';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductserviceService {
  constructor(private http: HttpClient) {}
  getproductList() {
    return this.http.get('https://dummyjson.com/products');
  }
  getProductDetails(id: number) {
    return this.http.get(`https://dummyjson.com/products/${id}`);
  }

  quantity!: number;
  myCart: Product[] = [];
  counter = 0;
  counterChanged = new Subject<number>();

  incrementCounter() {
    this.counter++;
    this.counterChanged.next(this.counter);
  }
  decrementCounter() {
    this.counter--;
    this.counterChanged.next(this.counter);
  }
}
