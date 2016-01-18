var express = require('express');
var router = express.Router();

//sequelize
var Sequelize = require('sequelize');
var seque = new Sequelize('test', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

var User = seque.define('user', {
    username: Sequelize.STRING,
    password: Sequelize.STRING
});

var Project = seque.define('project', {
    title: Sequelize.TEXT,
    amount: Sequelize.INTEGER,
    deadline: Sequelize.DATE
});

//get
router.get('/:id', function(req, res){
    var userid = req.params.id;
    User.findById(userid).then(function(result){
        res.json(result.dataValues);
    });
});

//list
router.get('/list', function(req, res) {
    User.findAndCountAll().then(function(result){
        console.log(result);
        res.json(result.rows);
    })
});

//post methods
router.post('/add', function(req, res) {
    console.log(req.body);
    var tmp = req.body;

    User.create({
        username: tmp.username,
        password: tmp.password
    }).then(function(result){
        console.log(result.get({plain:true}));
        res.send(JSON.stringify({ result : 'succ'}));
    });
});

//delete
router.delete('/delete/:id', function(req, res) {
    var userid = req.params.id;
    console.log(userid);

    User.findById({
        id: userid
    }).then(function(user){
        console.log(result);
        res.send(JSON.stringify({ result : 'succ'}));
    })
});

module.exports = router;