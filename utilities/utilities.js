const fs = require("fs");
var request = require('request');
var constants = require("../constants");


module.exports = class utilities {

    
    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    generateWord() {
        return new Promise((resolve, reject) => {
            var hitUrl = constants.randomWordurl+constants.api_key;
            request({url: hitUrl,json: true, headers: {'User-Agent': 'request'}}, function(err, res, body){
                if(err){
                    reject(err);
                }
                resolve(body);
            });
        });
    }

    getWod() {
        return new Promise((resolve, reject) => {
            var hitUrl = 'http://localhost:3001/wod';
            request(hitUrl, function(err, res, body){
                if(err){
                    reject(err);
                }
                resolve(body);
            });
        });
    }

    getWodDefinition() {
        return new Promise((resolve, reject) => {
            fs.readFile('./wod.txt', 'utf8', function(err, contents){
                var hitUrl = constants.baseUrl+contents+constants.definitionsEndpoint+constants.api_key;
                request({url: hitUrl, json: true, headers: {'User-Agent': 'request'}}, function(err, res, body){
                    if(err){
                        reject(err);
                    }
                    resolve(body);
                });
            });
        });
    }
};