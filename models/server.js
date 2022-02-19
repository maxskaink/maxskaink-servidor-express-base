// Importacion cosas necesarias
const express = require("express")
const cors = require("cors");


class Server {
    
    constructor() {
        this.port = process.env.PORT
        this.usuariosPath = "/api/usuarios/"
        //Inicar express
        this.app = express()
        
        //Middlewares
        this.middlewares()
        //Configuracion Rutas
        this.routes()

    }

    middlewares() {
        //Cors
        this.app.use( cors() )
        // lectura y parseo del body
        this.app.use( express.json())
        //Directorio publico
        this.app.use( express.static("public") )
    }

    routes() {
        this.app.use(this.usuariosPath, require("../routes/user"))
    }

    listen() {

        this.app.listen(this.port, (msg) => console.log(`Server init on port ${this.port}`))
    
    }
}


module.exports = Server;