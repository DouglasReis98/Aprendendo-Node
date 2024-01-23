const express = require('express')
const app = express()
const port = 5000;

const projectsRoutes = require('./projects')

//  arquivos estáticos
app.use(express.static('public'))

app.use('/projects', projectsRoutes)

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/html/index.html`)
})

app.get('/about', (req, res) => {
    res.sendFile(`${__dirname}/html/about.html`)
})

app.listen(port, () => {
    console.log("Connected")
})