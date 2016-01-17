var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: true})); //support x-www-form-urlencoded
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.send("api list");
});

app.get('/user', function(req, res){
    res.send('user new');
});



app.listen(3000, function(){
    console.log('running');
});