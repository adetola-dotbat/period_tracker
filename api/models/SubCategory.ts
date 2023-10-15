export class SubCategory {
  name: string;
  id: number;
  image: string;
  productIds: number[];
  selected: boolean;

  constructor(
    name: string,
    id: number,
    image: string,
    productIds: number[],
    selected: boolean,
  ) {
    this.id = id;
    this.image= image,
    this.name = name;
    this.productIds = productIds;
    this.selected = selected;
  }
}
