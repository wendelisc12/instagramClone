//configurando servidor
const express = require("express")
const server = express()

//configurar servidor para mostrar arquivos extras
server.use(express.static('public'))

//para usar o body no express
server.use(express.urlencoded({ extended: true }))


//configurando o nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express:server,
    noCache:true,
})


//configurar a apresentação da pagina
server.get("/", function(req,res){
    return res.render("index.html")
})

server.get("/register", function(req,res){
    return res.render("register.html")
})

server.get("/login", function(req,res){
    return res.render("login.html")
})

//ligar o servidor e liberar acesso a porta 3000
server.listen(3001, function(){
    console.log("starting server")
})

