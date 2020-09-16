export interface IProduct {
  id?: string;
  name: string;
  price: number;
  description: string;
  quantity: number;
}

export class Product {
  id;
  name;
  price;
  description;
  quantity;
  constructor(vals?: IProduct) {
    if (vals) {
      this.id = vals.id ? vals.id : undefined;
      this.name = vals.name ? vals.name : '';
      this.price = vals.price ? vals.price : 0;
      this.description = vals.description ? vals.description : '';
      this.quantity = vals.quantity ? vals.quantity : 0;
    } else {
      this.name = '';
      this.price = 0;
      this.description = '';
      this.quantity = 0;
    }
  }
}