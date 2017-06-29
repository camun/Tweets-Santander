//Query
exports.queryTotales = function(req, res){
    var config = require('../config/config.js');
    var Cloudant = require('cloudant')({account:config.cloudant.account, password:config.cloudant.password});
    var dbname = config.cloudant.dbname;
    var bd = Cloudant.use(dbname);
    bd.find({
        "selector": {
            "_id": "2b6d4575ff7063a9dad8ad69be048ccb"
        },
        "fields": [
            "2016"
        ],
        "sort": [
            {
                "_id": "asc"
            }
        ]
    }, function(err, result){
        if(!err){
            console.log("Consulta de totales exitosa");
            res.json(result.docs[0]);
        }
        else{
            console.log(err.reason);
            errstr += err.reason;
            res.status(500).send(errstr);
        }

    });
};

