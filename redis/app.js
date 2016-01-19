var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var util = require('./util/redis.js');

var app = express();

//views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({extended: true})); //support x-www-form-urlencoded
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req,res){
    util.users();    
    res.render('index', { title: 'aaa' });
});

var server = app.listen(3000, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
