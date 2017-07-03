//Query
exports.queryTotales = function(req, res){
    var config = require('../config/config.js');
    var Cloudant = require('cloudant')({account:config.cloudant.account, password:config.cloudant.password});
    var dbname = config.cloudant.dbname;
    var bd = Cloudant.use(dbname);
    bd.find({
        "selector": {
            "_id": "324cb8c74f1238698a584bab42f3fbab"
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

//negatives
exports.negatives = function(req, res){
    var config = require('../config/config.js');
    var Cloudant = require('cloudant')({account:config.cloudant.account, password:config.cloudant.password});
    var dbname = 'tweetsclasificados';
    var bd = Cloudant.use(dbname);

    bd.find({
            "selector": {
                "payload.sentiment.type": "negative"
            },
            "fields": [
                "tweet.user.profile_image_url",
                "tweet.user.name",
                "tweet.user.screen_name",
                "tweet.text"
            ],
            "sort": [
                {
                    "_id": "desc"
                }
            ],
            "limit": 10
        }, function(err, result) {
            if (!err) {
                console.log(result.docs);
                res.json(result.docs);
            }
            else {
                console.log(err.reason);
            }
        }
    )
};

//positives
exports.positives = function(req, res){
    var config = require('../config/config.js');
    var Cloudant = require('cloudant')({account:config.cloudant.account, password:config.cloudant.password});
    var dbname = 'tweetsclasificados';
    var bd = Cloudant.use(dbname);

    bd.find({
            "selector": {
                "payload.sentiment.type": "positive"
            },
            "fields": [
                "tweet.user.profile_image_url",
                "tweet.user.name",
                "tweet.user.screen_name",
                "tweet.text"
            ],
            "sort": [
                {
                    "_id": "desc"
                }
            ],
            "limit": 10
        }, function(err, result) {
            if (!err) {
                console.log(result.docs);
                res.json(result.docs);
            }
            else {
                console.log(err.reason);
            }
        }
    )
};

//neutrals
exports.neutros = function(req, res){
    var config = require('../config/config.js');
    var Cloudant = require('cloudant')({account:config.cloudant.account, password:config.cloudant.password});
    var dbname = 'tweetsclasificados';
    var bd = Cloudant.use(dbname);

    bd.find({
            "selector": {
                "payload.sentiment.type": "neutral"
            },
            "fields": [
                "tweet.user.profile_image_url",
                "tweet.user.name",
                "tweet.user.screen_name",
                "tweet.text"
            ],
            "sort": [
                {
                    "_id": "desc"
                }
            ],
            "limit": 10
        }, function(err, result) {
            if (!err) {
                console.log(result.docs);
                res.json(result.docs);
            }
            else {
                console.log(err.reason);
            }
        }
    )
};
