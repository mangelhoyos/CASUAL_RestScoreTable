mysql = require('mysql2');

require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const { databaseService } = require('./services/databaseService');

const app = express();

app.use(bodyParser.json()); //Se van a serializar los datos en JSON

require('./routes')(app, databaseService());

//Escuchando en el puerto 8080
app.listen(8080, function()
{ 
    console.log('Backend escuchando en el puerto 8080');    
});