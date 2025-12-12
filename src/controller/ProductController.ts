import chalk from "chalk";
import { Product } from "../model/Product";
import { ProductRepository } from "../repository/ProductRepository";
import { Mushroom } from "../model/Mushroom";

export class ProductController implements ProductRepository {
  private productList: Array<Product> = new Array<Product>();
  sequenceId: number = 0;

  create(product: Product): void {
    if (product != null) {
      this.productList.push(product);
      console.log(chalk.green("Produto cadastrado com sucesso!"));
      return;
    }
    console.log(chalk.red("ERRO! Tente novamente!"));
  }

  listAll(): void {
    if (this.productList.length === 0) {
      console.log(chalk.yellow("\nNenhum produto cadastrado."));
      return;
    }
    this.productList.forEach((p) => {
      p.view();
    });
  }

  findById(id: number): void {
    let product = this.findInArray(id);
    if (!product) {
      console.log(chalk.yellow(`\nProduto com Id ${id} nao encontrado!`));
      return;
    }
    product.view();
  }

  update(product: Product): void {
    let productFound = this.findInArray(product.id);

    if (productFound != null) {
      this.productList[this.productList.indexOf(productFound)] = product;
      console.log(
        chalk.green(`\nO produto ID: ${product.id} foi atualizado com sucesso!`)
      );
    } else {
      console.log(
        chalk.red(`\nO produto ID: " ${product.id} nao foi encontrado!`)
      );
    }
  }

  delete(id: number): void {
    let productFound = this.findInArray(id);

    if (productFound != null) {
      this.productList.splice(this.productList.indexOf(productFound), 1);
      console.log(
        chalk.yellow(`\nO produto de Id ${id} foi apagado com sucesso!`)
      );
    } else {
      console.log(chalk.red(`\nO produto de Id ${id} nao foi encontrado!`));
    }
  }

  sell(id: number, quantity: number): void {
    let productFound = this.findInArray(id);
    if (productFound != null) {
      let ok = productFound.sell(quantity);
      if (ok)
        console.log(
          chalk.green(`\nVendidos ${quantity} unidade(s) do produto ID ${id}.`)
        );
    } else {
      console.log(chalk.red(`\nO produto ID: ${id} nao foi encontrado!`));
    }
  }

  restock(id: number, quantity: number): void {
    let productFound = this.findInArray(id);
    if (productFound != null) {
      productFound.restock(quantity);
      console.log(
        chalk.green(
          `\nReabastecido(s) ${quantity} unidade(s) do produto ID ${id}.`
        )
      );
    } else {
      console.log(chalk.red(`\nO produto ID: ${id} não foi encontrado!`));
    }
  }

  public generateId(): number {
    return ++this.sequenceId;
  }

  public findInArray(id: number): Product | null {
    for (let product of this.productList) {
      if (product.id === id) {
        return product;
      }
    }
    return null;
  }

  public seed(): void {
    this.create(new Mushroom(
        this.generateId(), //id
        "Shimeji Branco", //name
        12.5,             //price
        20,               //stock
        1,                //category
        "Producao local"  //origi
      ));

    this.create(new Mushroom(this.generateId(), "Juba de Leao", 50.0, 8, 2, "Importado"));
  }

}