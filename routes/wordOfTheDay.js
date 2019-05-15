var express = require('express');
var router = express.Router();
var constants = require("../constants");
var wordOfTheDay = require('../services/wordOfTheDayService');
const fs = require('fs');


/* GET users listing. */
router.get('/', function(req, res, next) {
  const WordOfTheDay = new wordOfTheDay();
  var word =  WordOfTheDay.get40WordsAndReturnRandomWord().then(data => {
    fs.writeFile("./wod.txt", data.word, function(err) {
      if(err) {
          return console.log(err);
      }
      // console.log('success')
      res.send(data.word); 
    }); 
  });
});

module.exports = router;
