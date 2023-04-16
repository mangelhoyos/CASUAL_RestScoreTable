module.exports = function(app, databaseService)
{
    //Endpoint para ingresar puntaje
    app.post('/addscore', (request, response) => {

        const newScore = request.body;
        console.log(newScore);

        databaseService.createScore(newScore)
        .then(() => {
            response.json({"response" : "Puntaje añadido satisfactoriamente"});
        }).catch((e) => {
            response.status(500).json(e);
            console.log(e);
        });

    });

    //Endpoint para recopilar el puntaje en orden descendente
    app.get('/getscores', (request, response) =>{

        databaseService.getScoreList()
        .then((puntajes) => {
            response.json(puntajes);
        }).catch((e) => {
            response.status(500).json(e);
        });

    });
};