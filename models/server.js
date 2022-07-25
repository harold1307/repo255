const express = require('express');
var pretty = require('express-prettify');
const cors = require('cors');
const routes = require('../routes/usuarios');
const { dbConnection } = require('../database/config');
const bodyParser = require('body-parser');

class Server{
    constructor(){
       this.app = express();
       this.port = process.env.PORT;
       this.usuariosPath='/api/usuarios';

       //Connectar base de dato
       this.conectarDB()       

       //middlewares
        this.middlewares();            
       //Rutas de mi aplicación
            this.routes();
    }
    middlewares(){
        // Directorio público
        this.app.use(express.static('public_html'));
        this.app.use(pretty({ query: 'pretty' }));
        this.app.use(cors());
        // Lectura y parseo del body
        this.app.use( express.json() );          
    }

    async conectarDB(){
        await dbConnection();
    }
    routes(){
        this.app.use(this.usuariosPath, routes );        
    }
    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Servidor corriendo en el puerto', this.port)
        })
    }
}

module.exports = Server