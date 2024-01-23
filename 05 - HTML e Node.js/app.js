const express = require("express");
const app = express();

/* Renderizar uma página por vez

app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html");
})

app.get("/sobre", function(req, res){
    res.sendFile(__dirname + "/html/sobre.html");
})
*/

// Renderizar um diretório

const path = require('path')

const basePath = path.join(__dirname, 'html')

// Middleware Autenticação

const checkAuth = function (req, res, next) {
    req.authStatus = false

    if (req.authStatus) {
        console.log('Está logado, pode continuar')
        next()
    } else {
        console.log('Não está logado, faça o login para continuar')
        next()
    }
}

app.use(checkAuth)

app.get("/", function(req, res){
    res.sendFile(basePath + "/index.html");
})

app.get("/sobre", function(req, res){
    res.sendFile(basePath + "/sobre.html");
})


app.get("/blog", function(req, res){
    res.send("Bem vindo ao meu blog");
})

// Lendo dados com POST

    // Lendo o body

    app.use(
        express.urlencoded({
            extended: true
        })
    )

    app.use(express.json())

app.get('/users/add', (req, res) => {
    res.sendFile(`${basePath}/userForm.html`)
})

app.post("/users/save", (req,res) => {
    console.log(req.body)

    const name = req.body.name
    const age = req.body.age

    console.log("O nome do usuário é " + name + " e ele tem " + age + " anos!")
})
//----------------------------------------

app.get("/users/:id", function(req, res){

    const id = req.params.id

    // leitura da tabela users, resgatar um usuário do banco
    console.log(`Estamos buscando pelo usuário: ${id}`)
    res.sendFile(`${basePath}/users.html`)
   
})

app.get("/ola/:nome/:cargo/:idade", function(req, res){
    res.send("<h1>Olá, " + req.params.nome + "</h1>" + 
    "<h1>Seu cargo é " + req.params.cargo + "</h1>" + 
    "<h1>Sua idade é " + req.params.idade + " anos </h1>");
})

app.listen(8081, function() {
    console.log("Servidor rodando na URL http://localhost:8081");
});
