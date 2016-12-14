/**
 * Created by andycao on 16/5/12.
 */

var express = require('express');
var router = express.Router();

router.param(function(param, option) {
    return function (req, res, next, val) {
        if (val == option) {
            next();
        }
        else {
            res.sendStatus(403);
        }
    }
});

router.param('id', 1337);

router.get('/test/:id', function (req, res) {
    res.send('OK');
});


module.exports = router;