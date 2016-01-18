var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//routes
var routes = require('./routes/index.js');
var user = require('./routes/user.js');
var project = require('./routes/project.js');

var app = express();

//views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({extended: true})); //support x-www-form-urlencoded
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.use('/user', user);
app.use('/project', project);

// app.get('/create', function(req, res){

//   Project.create({
//     title: "test project",
//     amount: 2000,
//     deadline: new Date()
    
//   }).then(function(obj){
//     console.log(obj.get({plain:true}));
//     res.send("create success");
//   })
// });


app.listen(3000, function(){
  console.log('server running on : ' + 3000);
});