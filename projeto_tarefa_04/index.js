const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
/*
const hbs = exphbs.create({
    partialsDir
})
*/

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use(express.static("public"))

const produtos = [   
    {
        id: 1,
        nome: 'Arroz',
        preco: 10.00
    },
    {
        id: 2,
        nome: 'Feijão',
        preco: 15.00
    },
    {
        id: 3,
        nome: 'Frango',
        preco: 25.00
    },
    {
        id: 4,
        nome: 'Laranja',
        preco: 8.00
    },
];

// Rotas

app.get('/', (req, res) => {
    res.render('home', {produtos: produtos})
    //res.send('home')
});

app.get('/produtos/:id', (req, res) => {
    const produto = produtos[parseInt(req.params.id) - 1]
    res.render('produtos', {produto})
    //res.send('home')
});

app.listen(3000, console.log("programa rodando"))