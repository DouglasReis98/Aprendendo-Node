//nome

console.log(process.argv)

const args = process.argv.slice(2)

const nome = args[0].split("=")[1]

console.log(nome)

const idade = args[1].split("=")[1]

console.log(`Eu sou ${nome} e tenho ${idade} anos`)
/*---------------------------------------------------------*/

/*----------------------Módulos Externos----------------------*/
