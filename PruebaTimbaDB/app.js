//Para configurar los datos de autenticación hay que editar las variables e entorno del archivo .env
//Solo tocar la variable DB_PASS o también DB_USER en caso de que no sea root

mysql = require('mysql2');

require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const { databaseService } = require('./services/databaseService');

const app = express();

app.use(bodyParser.json()); //Se van a serializar los datos en JSON

require('./routes')(app, databaseService());

//Inicializar API
app.listen(8080, function()
{ 
    console.log('Asegurate de cambiar la contraseña del root por las tuyas de MySQL en el .env');
    console.log('Asegurate de haber integrado la base de datos al MySQL Workbench y dejar la base de datos con el nombre timbapruebadb');
    
    console.log('El puerto del SQL está escuchando en 3306');
    console.log('REST API escuchando en el puerto 8080');    
});