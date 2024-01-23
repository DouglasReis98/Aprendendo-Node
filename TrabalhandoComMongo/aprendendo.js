const mongoose = require("mongoose"); // Inclui o módulo mongoose  

//Congifurando o Mongoose
mongoose.Promise = global.Promise;  // Para evitar alguns erros
mongoose.connect("mongodb://localhost/aprendendo", {
    useNewUrlParser: true
}).then(() => {
console.log("MongoDB Conectado!")
}).catch((err) => {
    console.log("Houve um erro ao se conectar ao MongoDB:" + err)
}); // Inicia a conexão com o Mongo

// Model - Usuários

// Definindo o Model
const UsuarioSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    sobrenome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    },
    pais: {
        type: String
    }

});

// Collection
mongoose.model('usuarios', UsuarioSchema);

const Douglas = mongoose.model('usuarios');

    new Douglas({
        nome: "Thiago",
        sobrenome: "Mendes",
        email: "thiago-mendes@hotmail.com",
        idade: 28,
        pais: "Brasil"
    }).save().then(() => {
        console.log("Usuário criado com sucesso!")
    }).catch((err) => {
        console.log("Houve um erro ao registrar o usuário" + err)
    });