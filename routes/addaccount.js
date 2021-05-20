var express = require('express');
var fs = require('fs');
var users = require('../model/users.js');
var router = express.Router();

router.post('/', function(req, res, next) {
    users.username = req.body.username;
    users.password = req.body.password;

    console.log(users);

    let userData = fs.readFileSync('./model/users.json');

    let siteUsers = JSON.parse(userData);

    siteUsers.push(users);

    const usersString = JSON.stringify(siteUsers)
    fs.writeFile('./users.json', usersString, err => {
        if(err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    })

    res.render('display', users)
});

module.exports = router;