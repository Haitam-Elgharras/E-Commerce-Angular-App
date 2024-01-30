import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  product = {
    name: 'iPhone 12',
    price: 1000,
    color: 'black',
    discount: 9.12,
    inStock: 0,
  };

  getDiscountedPrice(): number {
    return this.product.price * (1 - this.product.discount / 100);
  }
}
