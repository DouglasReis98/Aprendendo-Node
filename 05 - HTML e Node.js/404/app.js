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

const users = require('./users')


// Middleware Autenticação

const checkAuth = function (req, res, next) {
    req.authStatus = true

    if (req.authStatus) {
        console.log('Está logado, pode continuar')
        next()
    } else {
        console.log('Não está logado, faça o login para continuar')
        next()
    }
}

// Lendo dados com POST

    // Lendo o body

    app.use(
        express.urlencoded({
            extended: true
        })
    )

    app.use(express.json())

//  arquivos estáticos
app.use(express.static('public'))

app.use(checkAuth)

app.use('/users', users)

app.get("/", function(req, res){
    res.sendFile(basePath + "/index.html");
})

app.use(function(req, res, next){
    res.status(404).sendFile(`${basePath}/404.html`)
})

app.get("/sobre", function(req, res){
    res.sendFile(basePath + "/sobre.html");
})


app.get("/blog", function(req, res){
    res.send("Bem vindo ao meu blog");
})


//----------------------------------------


app.get("/ola/:nome/:cargo/:idade", function(req, res){
    res.send("<h1>Olá, " + req.params.nome + "</h1>" + 
    "<h1>Seu cargo é " + req.params.cargo + "</h1>" + 
    "<h1>Sua idade é " + req.params.idade + " anos </h1>");
})

app.listen(8081, function() {
    console.log("Servidor rodando na URL http://localhost:8081");
});
