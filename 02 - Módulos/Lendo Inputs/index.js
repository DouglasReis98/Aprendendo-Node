const { read } = require("fs")

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Qual a sua linguagem preferida?", (language) => {
    
    if (language == "HTML") {
        console.log("ISSO NÃO É LINGUAGEM DE PROGRAMAÇÃO, SEU ENERGÚMENO!!!!!")
    } else {
        console.log("A minha lingugem preferira é : " + language)
    }
    readline.close()
})