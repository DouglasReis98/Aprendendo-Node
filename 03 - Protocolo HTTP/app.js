var http = require("http"); //Módulo  embutido no Node - Permite criar conexões HTTP

http.createServer(function(req, res) {
    res.end("Hello World!!!")
})
.listen(8786); //Informa em qual porta de rede se deseja abrir o servidor

console.log("Servidor funcionando")