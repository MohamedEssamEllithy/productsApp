import { Component } from '@angular/core';
import { ProductserviceService } from 'src/app/productservice.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  counter!: number;
  counterSubscription!: Subscription;
  constructor(private _product: ProductserviceService) {}

  ngOnInit() {
    this.counter = this._product.counter;
    console.log('Initial counter value:', this.counter);

    this.counterSubscription = this._product.counterChanged.subscribe(
      (newCounter: number) => {
        this.counter = newCounter;
        console.log('Updated counter value:', this.counter);
      }
    );
  }
}
