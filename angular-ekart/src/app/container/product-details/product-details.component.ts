import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  @Input()
  selectedProduct: Product | undefined;

  @Output()
  hideProductDetails: EventEmitter<void> = new EventEmitter<void>();

  onHideProductDetails() {
    this.hideProductDetails.emit();
  }
}
