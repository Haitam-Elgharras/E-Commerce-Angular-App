import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  addToCart: number = 0;
  name = 'john doe';
  product = {
    name: 'iPhone 12',
    price: 1000,
    color: 'black',
    discount: 9.12,
    inStock: 3,
    pImage: '/assets/images/iphone.png',
  };

  decrement() {
    if (this.addToCart > 0) this.addToCart--;
    else alert('Cannot be less than 0');
  }
  increment() {
    if (this.addToCart < this.product.inStock) this.addToCart++;
    else alert('Cannot be more than stock');
  }

  getDiscountedPrice(): number {
    return this.product.price * (1 - this.product.discount / 100);
  }

  onNameChange(event: any) {
    console.log(event);
    this.name = event.target.value;
  }
}
