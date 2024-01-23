const chalk = require("chalk")

const nota = 8

if (nota >= 7) {
    console.log(chalk.green.bold("Parabéns! Você foi aprovado!"))
} else {
    console.log(chalk.bgRed.yellow("Reprovado! Precisa fazer recuperação!"))
}
