var express = require('express')
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.get('/json', function(req, res){
    console.log(req.query.param1);
    res.json({name : 'good', param1 : req.query.param1});
});

// var server = app.listen(3000, function () {

//   var host = server.address().address
//   var port = server.address().port

//   console.log('Example app listening at http://%s:%s', host, port)
  
// });
var a = require.resolve('express');

app.listen(3001);