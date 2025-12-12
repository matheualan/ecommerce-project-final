import chalk from "chalk";
import readline = require("readline-sync");

export function main() {

    let menuOption: number;
    let accountNumber, agency, accountType, balance, limit, birthday: number;
    let starter: string;
    const typesAccounts = ['Conta Corrente', 'Conta Poupanca'];

    while (true) {
        console.log(chalk.yellow("*****************************************************"));
        console.log(chalk.blueBright("                   COGUMELOS EXPRESS                 "));
        console.log(chalk.yellow("*****************************************************\n"));
        console.log("             1 - Cadastrar Produto                    ");
        console.log("             2 - Listar Produtos                      ");
        console.log("             3 - Buscar Produto por Id                ");
        console.log("             4 - Atualizar Produto                    ");
        console.log("             5 - Deletar Produto                      ");
        console.log(chalk.red("             0 - Sair                                 "));
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

                // agency = readline.questionInt("Digite o numero da agencia: ");
                // starter = readline.question("\nDigite o nome do titular da conta: ");
                // accountType = readline.keyInSelect(typesAccounts, "", {cancel: false}) + 1;
                // balance = readline.questionFloat("\nDigite o saldo da conta (R$): ");

                // switch (accountType) {
                //     case 1: 
                //         // limit = readline.questionFloat("Digite o limite da conta (R$): ");
                //         // accountService.create(new CheckingAccount(accountService.geranateNumber(),
                //         //         agency, accountType, starter, balance, limit));
                //         break;

                //     case 2:
                //         // birthday = readline.questionInt("Digite o dia do aniversario da conta poupanca: ");
                //         // accountService.create(new SavingsAccount(accountService.geranateNumber(),
                //         //         agency, accountType, starter, balance, birthday));
                //         break;
                // }

                break;

            case 2:
                console.log(chalk.greenBright("\n\nListar todos Produtos\n\n"));
                // accountService.listAll();
                break;

            case 3:
                console.log(chalk.greenBright("\n\nConsultar Produto por Id\n\n"));
                // accountNumber = readline.questionInt("Digite o numero da conta: ");
                // accountService.findByAccountNumber(accountNumber);
                break;

            case 4:
                console.log(chalk.greenBright("\n\nAtualizar Produto\n\n"));

                // accountNumber = readline.questionInt("Digite o numero da conta: ");
                // let account = accountService.findInArray(accountNumber);

                // if (account != null) {
                //     agency = readline.questionInt("Digite o Número da agência: ");
                //     starter = readline.question("Digite o Nome do Titular da conta: ");
                //     accountType = account.accountType;
                //     balance = readline.questionFloat("\nDigite o Saldo da conta (R$): ");

                //     switch (accountType) {
                //         case 1:
                //             limit = readline.questionFloat("Digite o Limite da Conta (R$): ");
                //             accountService.update(
                //                 new CheckingAccount(accountNumber, agency, accountType, starter, balance, limit));
                //             break;

                //         case 2:
                //             birthday = readline.questionInt("Digite o Dia do aniversário da Conta Poupança: ");
                //             accountService.update(new SavingsAccount(accountNumber, agency, accountType, starter, balance, birthday));
                //             break;
                //     }

                // } else {
                //     console.log(`\nA Conta numero: ${accountNumber} não foi encontrada!`);
                // }

                break;

            case 5:
                console.log(chalk.greenBright("\n\nDeletar Produto\n\n"));
                // accountNumber = readline.questionInt("Digite o numero da Conta: ");
                // accountService.delete(accountNumber);
                break;
                
            default:
                console.log(chalk.greenBright("\nOpcao Invalida!\n"));
                break;
        }
        
    }



}


export function about(): void {
    console.log("\n=================================================================================");
    console.log("Projeto Desenvolvido por: ");
    console.log("Matheus Alan - matheusv@genstudents.org");
    console.log("https://github.com/matheualan/ecommerce-project-final");
    console.log("=================================================================================");
}

main();