const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'root', 'mypassword', {
    host: "localhost",
    dialect: "mysql"
});

/*
sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro) {
    console.log("Falha ao se conectar: " + erro);
});
*/

// Postagem

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});

/*
Postagem.create({
    titulo: "UM TÍTULO QUALQUER",
    conteudo: "UM TEXTO QUALQUER PARA SER EXEMPLO"
});
*/

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})
 Usuario.create({
    nome: "Douglas",
    sobrenome: "Reis",
    idade: 20,
    email: "douglas-reis@hotmail.com"
 })
// Usuario.sync({force: true})