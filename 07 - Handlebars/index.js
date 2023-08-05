const express = require("express");     // Inclui o módulo express
const app = express();                  // Cria uma instância do express
const handlebars = require('express-handlebars');   // Inclui um módulo Handlebars
const bodyParser = require('body-parser')   // Inclui um módulo Body Parser
const hbs = handlebars.create({defaultLayout: 'main'})
const Post = require("./models/Post")

// Config
    // Template Engine
    app.engine('handlebars', hbs.engine) // Função do express usada para registrar o callback do engine do template fornecido como 'handlebars'.
    app.set('view engine', 'handlebars')    // Função usada para atrubuir o nome da configuração ao valor ('view engine' á 'handlebars')
    
    //Body Parser - Configuração
    app.use(bodyParser.urlencoded({extended: false}));  // O app.use monta a(s) função(ões) middleware especificadas no caminho especificado.
    app.use(bodyParser.json());

// Rotas

    app.get("/", function(req, res) {
        res.render('home');
    })

    app.get('/cad', function(req, res){
        res.render('formulario')
    })

    app.post('/add', function(req, res){
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function(){
            //res.send("Post criado com sucesso!");
            res.redirect("/");
        }).catch(function(erro){
            res.send("Houve um erro: " + erro);
        })

        // res.send("Texto: " + req.body.titulo + " Conteúdo: " + req.body.conteudo); // Usando os nomes (names) dos campos do formulário
    })

app.listen(8081, function() {
    console.log("Servidor rodando na URL http://localhost:8081");
});