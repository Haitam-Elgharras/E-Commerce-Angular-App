export class Product {
  id: number = 0;
  name: string = '';
  price: number = 0;
  discountPrice?: number;
  color: (string | undefined)[] = [];
  imageURL: string = '';
  brand: string = '';
  gender: string = '';
  category: string = '';
  is_in_inventory: boolean = false;
  description: string = '';
  items_left: number = 0;
  slug: string = '';
  size: number[] = [];
}
