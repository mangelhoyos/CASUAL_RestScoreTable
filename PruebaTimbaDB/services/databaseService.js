//Servicios de la conexión a la base de datos SQL

const databaseService = () => {

    //Base de datos basada en MySQL con un puerto en 3306
    const knex = require('knex')({
        client : 'mysql2',
        connection : {
            host : process.env.DB_HOST,
            port : 3306,
            user : process.env.DB_USER,
            password : process.env.DB_PASS,
            database : process.env.DB,
        }
    });

    const table = 'puntajes';

    //Conseguir la lista en orden descendente de los puntajes
    const getScoreList = () => {
        return knex(table)
        .select()
        .orderBy('puntaje', 'desc');
    };

    //Guardar un usuario con puntaje
    const createScore = ({usuario, puntaje}) => {
        return knex(table).insert({
            usuario: usuario,
            puntaje: puntaje
        });
    };

    return {
        createScore,
        getScoreList
    }
};

module.exports = {
    databaseService
};