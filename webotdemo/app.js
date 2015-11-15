var express = require('express');
var webot = require('webot');
//body-parser
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended : true
}));

webot.set('hi', "Hi, I'm Webot.");

webot.dialog('./weather.js');

// webot.set('subscribe', {
//   pattern: function(info) {
//     return info.event === 'subscribe';
//   },
//   handler: function(info) {
//     return 'Thank you for subscribe.';
//   }
// });
 
 // webot.set({
 //  pattern: 'beijing',
 //  handler: function() {
 //    return 'weather';
 //  },
 // });

//webot client using post
app.post('/', function(req, res, next) {
  
  var reqbody = req.body;
  console.log(reqbody);

  var message = req.body.message;

  console.log(message);


  //get post parameter changed in express 4.0
  // var message = req.query.message;

  webot.reply({
    text: message,
  }, function(err, info) {
    if (err) 
      return res.json({ r: err });
    res.json({
      r: 0,
      reply: info.reply
    });
  });

});

app.listen(3000);

