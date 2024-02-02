import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  @Input()
  productListComp: ProductListComponent | any;

  selectedProduct: Product | undefined;

  // ngOnInit is a lifecycle hook that is called after Angular has initialized all data-bound properties of a directive.
  ngOnInit() {
    this.selectedProduct = this.productListComp.selectedProduct;
  }

  onHideProductDetails() {
    this.productListComp.selectedProduct = undefined;
  }
}
