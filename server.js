let express=require('express');
let server=express();
let directory=`${__dirname}/static/`;
let mongoOperation=require(`${directory}/js/MongoOperation.js`);

server.use('/', express.static(__dirname + '/'));

server.get('/', function(req, res) {
    res.sendFile(`${directory}/html/index.html`);
});

server.get('/login',function(req,res){
    mongoOperation.mongoInsert(req.query);
    mongoOperation.mongoFind();
});

server.listen(3000);