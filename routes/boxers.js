var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let boxerData = fs.readFileSync('./model/boxers.json');
  var siteBoxer = JSON.parse(boxerData);

  //Assigning the parsed array of objects read-in from boxers.json to a variable called createdBoxers
  var createdBoxers = siteBoxer;
  res.render('boxer', {createdBoxers});
});

module.exports = router;
