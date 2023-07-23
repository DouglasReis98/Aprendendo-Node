const express = require("express");     // Inclui o módulo express
const app = express();                  // Cria uma instância do express
const handlebars = require('express-handlebars');   // Inclui um módulo Handlebars
const bodyParser = require('body-parser')
const Sequelize = require('sequelize');

const hbs = handlebars.create({defaultLayout: 'main'})
// Config
    // Template Engine
    app.engine('handlebars', hbs.engine) // Função do express usada para registrar o callback do engine do template fornecido como 'handlebars'.
    app.set('view engine', 'handlebars')    // Função usada para atrubuir o nome da configuração ao valor ('view engine' á 'handlebars')
    
    //Body Parser
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

    // Conexão com o banco de dados MySQL
    const sequelize = new Sequelize('test', 'root', '123456', {
    host: "localhost",
    dialect: "mysql"
});

// Rotas
    app.get('/cad', function(req, res){
        res.render('formulario')
    })

    app.post('/add', function(req, res){
        res.send("Texto: " + req.body.titulo + " Conteúdo: " + req.body.conteudo);
    })

app.listen(8081, function() {
    console.log("Servidor rodando na URL http://localhost:8081");
});