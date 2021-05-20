var express = require ('express');
var router = express.Router();
var fs = require('fs');
var user = require('../model/users.json');

router.get('/', function(req, res, next) {
    res.render('createaccount');

});

module.exports = router;
