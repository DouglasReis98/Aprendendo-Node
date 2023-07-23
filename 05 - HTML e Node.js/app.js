const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html");
})

app.get("/sobre", function(req, res){
    res.sendFile(__dirname + "/html/sobre.html");
})

app.get("/blog", function(req, res){
    res.send("Bem vindo ao meu blog");
})

app.get("/ola/:nome/:cargo/:idade", function(req, res){
    res.send("<h1>Olá, " + req.params.nome + "</h1>" + 
    "<h1>Seu cargo é " + req.params.cargo + "</h1>" + 
    "<h1>Sua idade é " + req.params.idade + " anos </h1>");
})

app.listen(8081, function() {
    console.log("Servidor rodando na URL http://localhost:8081");
});