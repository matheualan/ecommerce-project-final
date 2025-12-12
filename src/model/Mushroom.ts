import { Product } from "./Product";

export enum MushroomCategory {
  COMESTIVEL = "Comestivel",
  FUNCIONAL = "Funcional"
}

export class Mushroom extends Product {

  constructor(
    id: number,
    name: string,
    price: number,
    stock: number,
    public category: MushroomCategory) {
    super(id, name, price, stock);
  }

  description(): string {
    return `id: ${this._id}
     \nNome: ${this._name}
     \nCategoria: ${this.category}
     \nPreco: R$ ${this._price.toFixed(2)}
     \nEstoque: ${this._stock}`;
  }

}