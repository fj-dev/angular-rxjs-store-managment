export interface IProduct {
  id?: string;
  name: string;
  price: number;
  description: string;
  quantity: number;
}

export class Product {
  id;
  name = '';
  price = 0;
  description = '';
  quantity = 0;
  constructor(vals?: IProduct) {
    if (vals) {
      this.id = vals.id ? vals.id : undefined;
      this.name = vals.name ? vals.name : '';
      this.price = vals.price ? vals.price : 0;
      this.description = vals.description ? vals.description : '';
      this.quantity = vals.quantity ? vals.quantity : 0;
    }
  }

  get isInStock(): boolean {
    return this.quantity > 0;
  }
}