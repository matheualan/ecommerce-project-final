import chalk from "chalk";
import { Product } from "../model/Product";
import { ProductRepository } from "../repository/ProductRepository";

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
        this.productList.forEach((p) => {p.description});
    }

    findById(id: number): void {
        let product = this.findInArray(id);
        if (!product) {
            console.log(chalk.red(`\nProduto com Id ${id} nao encontrado!`));
            return;
        }
        product.description();
    }

    update(product: Product): void {
        let productFound = this.findInArray(product.id);

        if (productFound != null) {
            this.productList[this.productList.indexOf(productFound)] = product;
            console.log(chalk.green(`\nO produto de Id ${product.id} foi atualizado com sucesso!`));
        } else {
            console.log(chalk.red(`\nO produto de Id " ${product.id} nao foi encontrado!`));
        }
    }

    delete(id: number): void {
        let productFound = this.findInArray(id);

        if (productFound != null) {
            this.productList.splice(this.productList.indexOf(productFound), 1);
        	console.log(chalk.yellow(`\nO produto de Id ${id} foi apagado com sucesso!`));
        } else {
            console.log(chalk.red(`\nO produto de Id ${id} nao foi encontrado!`));
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

}