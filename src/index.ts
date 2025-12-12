import { ProductController } from './controller/ProductController';
import chalk from "chalk";
import readline = require("readline-sync");
import { Mushroom } from './model/Mushroom';
// import { MushroomCategory } from "./model/Mushroom";

export function main() {
  let menuOption: number;
  let id, price, stock, category: number;
  let name, origin: string;
//   let category: MushroomCategory;
  const mushroomCategory = ["Comestivel", "Funcional"];

  let productController: ProductController = new ProductController();
  productController.seed();

  while (true) {
    console.log(chalk.yellow("*****************************************************"));
    console.log(chalk.blueBright("                  COGUMELOS EXPRESS                 "));
    console.log(chalk.yellow("*****************************************************\n"));
    console.log("               1 - Cadastrar Produto                    ");
    console.log("               2 - Listar Produtos                      ");
    console.log("               3 - Buscar Produto por Id                ");
    console.log("               4 - Atualizar Produto                    ");
    console.log("               5 - Deletar Produto                      ");
    console.log(chalk.red("               0 - Sair                                 "));
    console.log(chalk.yellow("\n*****************************************************\n"));

    menuOption = readline.questionInt("Informe a opcao desejada: ");

    if (menuOption == 0) {
      console.log(chalk.cyan("\nCogumelos Express agradece sua visita, volte sempre!"));
      about();
      process.exit(0);
    }

    switch (menuOption) {
      case 1:
        console.log(chalk.greenBright("\n\nCadastrar Produto\n\n"));
        name = readline.question("Informe o nome do produto: ");
        price = readline.questionFloat("Informe o preco do produto: ");
        stock = readline.questionInt("Informe a quantidade em estoque: ");
        category = readline.keyInSelect(mushroomCategory, "", {cancel: false}) + 1;
        origin = readline.question("Informe a origem do produto: ");

        productController.create(new Mushroom(productController.generateId(), name, price, stock, category, origin));
        break;

      case 2:
        console.log(chalk.greenBright("\n\nListar todos Produtos\n\n"));
        productController.listAll();
        break;

      case 3:
        console.log(chalk.greenBright("\n\nConsultar Produto por Id\n\n"));
        id = readline.questionInt("Digite o ID do produto: ");
        productController.findById(id);
        break;

      case 4:
        console.log(chalk.greenBright("\n\nAtualizar Produto\n\n"));
        id = readline.questionInt("Digite o ID do produto: ");
        const productFound = productController.findInArray(id);

        if (productFound != null) {
          name = readline.question("Nome: ");
          price = readline.questionFloat("Preco (R$): ");
          stock = readline.questionInt("Estoque: ");
          category = readline.keyInSelect(mushroomCategory, "", {cancel: false}) + 1;
          origin = readline.question("Origem: ");

          productController.update(new Mushroom(id, name, price, stock, category, origin));
        } else {
            console.log(chalk.yellow(`\nProduto ID: ${id} nao encontrado!`));
        }

        break;

      case 5:
        console.log(chalk.greenBright("\n\nDeletar Produto\n\n"));
        id = readline.questionInt("Informe o ID do produto: ");
        productController.delete(id);
        break;

      case 6:
        console.log(chalk.greenBright("\n\nVender Produto\n\n"));
        id = readline.questionInt("Informe o ID do produto: ");
        let qtdSell = readline.questionInt("Informe a quantidade: ");
        productController.sell(id, qtdSell);
        break;

      case 7:
        console.log(chalk.greenBright("\n\nReabastecer estoque\n\n"));
        id = readline.questionInt("Informe o ID do produto: ");
        let qtdRestock = readline.questionInt("Informe a quantidade: ");
        productController.restock(id, qtdRestock);
        break;

      default:
        console.log(chalk.greenBright("\nOpcao Invalida!\n"));
        break;
    }
  }
}

export function about(): void {
  console.log(
    "\n================================================================================="
  );
  console.log("Projeto Desenvolvido por: ");
  console.log("Matheus Alan - matheusv@genstudents.org");
  console.log("https://github.com/matheualan/ecommerce-project-final");
  console.log(
    "================================================================================="
  );
}

main();
