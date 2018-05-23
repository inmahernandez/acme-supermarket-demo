import { Category } from "./category.model";
import { Deserializable } from "./deserializable.model";

export class ItemModel implements Deserializable{
    id: number;
    sku: string;
    name: string;
    description: string;
    price: number;
    picture: string;
    category_id: number;

    deserialize(input: any) {
      Object.assign(this, input);
      //this.category = new Category().deserialize(input.category);
      return this;
    }
  } 