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

    getSynonyms(){
        return new Promise((resolve, reject) => {
            fs.readFile('./wod.txt', 'utf8', function(err, contents){
                var url = constants.baseUrl+contents+constants.synonymsEndpoint+constants.api_key;
                request({url: url, json: true, headers: {'User-Agent': 'request'}}, function(err, res, body){
                    if(err){
                        reject(err);
                    }
                    if(body[0] && body[0].relationshipType == 'synonym')
                        resolve(body[0].words);
                    else if(body[1] && body[1].relationshipType == 'synonym')
                        resolve(body[1].words);
                    else
                        resolve("Synonyms for this word not found");
                });
            });
        });
    }


    getAntonyms(){
        return new Promise((resolve, reject) => {
            fs.readFile('./wod.txt', 'utf8', function(err, contents){
                var url = constants.baseUrl+contents+constants.antonymsEndpoint+constants.api_key;
                request({url: url, json: true, headers: {'User-Agent': 'request'}}, function(err, res, body){
                    if(err){
                        reject(err);
                    }
                    if(body[0] && body[0].relationshipType == 'antonym')
                        resolve(body[0].words);
                    else if(body[1] && body[1].relationshipType == 'antonym')
                        resolve(body[1].words);
                    else
                        resolve("Antonyms for this word not found");
                });
            });
        });
    }
};