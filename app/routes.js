module.exports = function(app, cloudant) {
    //Lleva a la página principal
    app.get('/', function(req, res){
        res.render('index');
    });

    //Importante: Este es el get que obtiene los totales
    app.get('/query', cloudant.queryTotales);
    app.get('/queryPrueba', cloudant.prueba);
    app.get('/queryPositivos', cloudant.positives);
    app.get('/queryNeutros', cloudant.neutros);

};
