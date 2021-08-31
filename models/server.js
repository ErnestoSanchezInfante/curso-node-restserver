const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../database/config')
class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Connectar a base de Datos
        this.conectarDB();

        //Middlewares
        this.middleware();

        //rutas de la aplicacion
        this.routes();
    }

    async conectarDB(){
        await dbConnection();
    }

    middleware(){

        //CORS
        this.app.use( cors() );

        //Lectura y Parseo del body
        this.app.use( express.json() );

        //Directorio publico
        this.app.use( express.static('public') );
    }

    routes(){
        this.app.use(this.usuariosPath, require('../routes/usuarios') );
     }


    listen(){
        this.app.listen( this.port , () => {
            console.log('Servidor corriendo en puerto ', this.port);
        });        
    }
}

module.exports= Server;
