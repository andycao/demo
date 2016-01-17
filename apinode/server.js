var express = require('express');
var bodyParser = require('body-parser');

//sequelize
var Sequelize = require('sequelize');
var seque = new Sequelize('test', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});


var User = seque.define('test', {
    username: Sequelize.STRING,
    password: Sequelize.STRING
});

seque.sync().then(function() {
  return User.create({
    username: 'janedoe',
    password: 'test'
  });
}).then(function(jane) {
  console.log(jane.get({
    plain: true
  }));
});

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