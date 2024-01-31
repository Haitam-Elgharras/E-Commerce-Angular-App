import { Component, Input } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  discountPrice?: number;
  color: (string | undefined)[];
  imageURL: string;
  brand: string;
  gender: string;
  category: string;
  is_in_inventory: boolean;
  description: string;
  items_left: number;
  slug: string;
  size: number[];
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input()
  product: Product = {} as Product;
  @Input()
  i: number = 0;
}
