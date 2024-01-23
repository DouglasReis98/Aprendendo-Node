const inquirer = require("inquirer")
const chalk = require("chalk")

inquirer.prompt([
    {
        name: 'nome',
        message: 'Qual é o seu nome?'
    },
    {
        name: 'idade',
        message: 'Qual é a sua idade?'
    }
]).then((respostas) => {
    if (!respostas.nome || !respostas.idade) {
        throw new Error('O nome e a idade são obrigatórios!')
    }
    console.log(chalk.bgYellow.black.bold(`O seu nome é ${respostas.nome} e a sua idade é ${parseInt(respostas.idade)} anos!`))
}).catch((err) => console.log(`Deu Ruim! ${err}`))