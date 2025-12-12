import { Product } from "./Product";

// export enum MushroomCategory {
//   COMESTIVEL = "Comestivel",
//   FUNCIONAL = "Funcional"
// }

export class Mushroom extends Product {
  //   constructor(
  //     id: number,
  //     name: string,
  //     price: number,
  //     stock: number,
  //     public category: MushroomCategory) {
  //     super(id, name, price, stock);
  //   }

  constructor(
    id: number,
    name: string,
    price: number,
    stock: number,
    private _category: number,
    private _origin: string
  ) {
    super(id, name, price, stock);
  }

  public get category(): number {
    return this._category;
  }

  public set category(category: number) {
    this._category = category;
  }

  public get origin(): string {
    return this._origin;
  }

  public set origin(origin: string) {
    this._origin = origin;
  }

  public view(): void {
    let category = "";

    switch (this._category) {
      case 1:
        category = "Comestivel";
        break;

      case 2:
        category = "Funcional";
        break;
    }

    super.view();
    console.log("Categoria: " + category);
    console.log("Origem: " + this._origin);
  }

}