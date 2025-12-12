import { Product } from "./Product";

export enum MushroomCategory {
  COMESTIVEL = "Comestível",
  FUNCIONAL = "Funcional"
}

/** Classe filha: cogumelo com atributos específicos */
export class Mushroom extends Product {

  constructor(
    id: number,
    name: string,
    price: number,
    stock: number,
    public species: string,             // ex: "Pleurotus ostreatus"
    public category: MushroomCategory,  // comestível | funcional
  ) {
    super(id, name, price, stock);
  }

  description(): string {
    return `${this.id} - ${this.name} (${this.species}) | ${this.category} | R$ ${this.price.toFixed(
      2
    )} | estoque: ${this.stock}`;
  }

}