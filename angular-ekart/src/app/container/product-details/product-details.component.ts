import { Component, Input } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  @Input() productListComp: ProductListComponent | any;
  selectedProduct: Product | undefined;

  constructor() {}

  ngOnInit() {
    this.selectedProduct = this.productListComp.selectedProduct;
  }

  onHideProductDetails() {
    this.productListComp.selectedProduct = undefined;
  }
}
