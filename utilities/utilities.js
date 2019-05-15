const fs = require("fs");
var request = require('request');
var constants = require("../constants");


module.exports = class utilities {

    
    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    generateWord() {
        return new Promise((resolve, reject) => {
            var hitUrl = 'https://fourtytwowords.herokuapp.com/words/randomWord?api_key='+constants.api_key;
            request({url: hitUrl,json: true, headers: {'User-Agent': 'request'}}, function(err, res, body){
                if(err){
                    reject(err);
                }
                // console.log(body);
                resolve(body);
            });
        });
    }
};