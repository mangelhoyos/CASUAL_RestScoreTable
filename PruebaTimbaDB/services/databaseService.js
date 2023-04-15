//Servicios de la conexión a la base de datos SQL

const databaseService = () => {

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

    const getScoreList = () => {
        return knex(table)
        .select()
        .orderBy('puntaje', 'desc');
    };

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