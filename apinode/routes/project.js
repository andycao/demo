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


router.get('/list', function(req, res) {
    Project.findAndCountAll().then(function(result){
        res.json(result.rows);
    });
});


module.exports = router;