var express = require('express');
var router = express.Router();



router.all('*', function(req, res, next){
  console.log('filter');
  req.msg = 123;
  next();
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.msg);
  res.send('user info');
});

router.param('id', function (req, res, next, id) {
  console.log('CALLED ONLY ONCE');
  console.log(id);
  next();
});

router.get('/user/:id', function (req, res, next) {
  console.log('although this matches');
  next();
});

router.get('/user/:id', function (req, res) {
  console.log('and this matches too');
  res.end();
});



module.exports = router;
