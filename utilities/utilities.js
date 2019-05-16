const fs = require("fs");
var request = require('request');
var constants = require("../constants");


module.exports = class utilities {

    
    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    generateWord() {
        return new Promise((resolve, reject) => {
            var url = constants.randomWordurl+constants.api_key;
            request({url: url,json: true, headers: {'User-Agent': 'request'}}, function(err, res, body){
                if(err){
                    reject(err);
                }
                resolve(body);
            });
        });
    }

    

    getWodDefinition(word) {
            return new Promise((resolve, reject) => {
                var url = constants.baseUrl+word+constants.definitionsEndpoint+constants.api_key;
                request({url: url, json: true, headers: {'User-Agent': 'request'}}, function(err, res, body){
                    if(err){
                        reject(err);
                    }
                    var html = '<!DOCTYPE html><html><body><h1>Definitions: </h1>';
                    if(body){
                        for(var i = 0; i < body.length; i++){
                            html += '<li>' + body[i].text + '</li>';
                        }
                        html += '</body></html>';
                        resolve(html);
                    }else{
                        resolve(html + "Definitions for this word not found");
                    }
                    resolve(body[0]);
                });
        });
    }

    getSynonyms(word){
            return new Promise((resolve, reject) => {
                var url = constants.baseUrl+word+constants.synonymsEndpoint+constants.api_key;
                request({url: url, json: true, headers: {'User-Agent': 'request'}}, function(err, res, body){
                    if(err){
                        reject(err);
                    }
                    var html = '<!DOCTYPE html><html><body><h1>Synonyms: </h1>';
                    if(body[0] && body[0].relationshipType == 'synonym')
                        resolve(html + body[0].words);
                    else if(body[1] && body[1].relationshipType == 'synonym')
                        resolve(html + body[1].words);
                    else
                        resolve(html + "Synonyms for this word not found");
                });
        });
        
    }


    getAntonyms(word){
            return new Promise((resolve, reject) => {
                var url = constants.baseUrl+word+constants.antonymsEndpoint+constants.api_key;
                request({url: url, json: true, headers: {'User-Agent': 'request'}}, function(err, res, body){
                    if(err){
                        reject(err);
                    }
                    var html = '<!DOCTYPE html><html><body><h1>Antonyms: </h1>';
                    if(body[0] && body[0].relationshipType == 'antonym')
                        resolve(html + body[0].words );
                    else if(body[1] && body[1].relationshipType == 'antonym')
                        resolve(html + body[1].words);
                    else
                        resolve(html + "Antonyms for this word not found");
                });
        });
    }

    getExamples(word){
        return new Promise((resolve, reject) => {
            var url = constants.baseUrl+word+constants.examplesEndpoint+constants.api_key;
            request({url: url, json: true, headers: {'User-Agent': 'request'}}, function(err, res, body){
                if(err){
                    reject(err);
                }
                var examples = body.examples;
                var html = '<!DOCTYPE html><html><body><h1>Examples: </h1>';
                if(examples){
                    for(var i = 0; i < examples.length; i++){
                        html += '<li>' + examples[i].text + '</li>';
                    }
                    html += '</body></html>';
                    resolve(html);
                }else{
                    resolve(html + "Examples for this word not found");
                }
            });
        });
    }

    getAllDetails(word){
        return new Promise(async (resolve, reject) => {
            var synonyms = await this.getSynonyms(word);
            var antonyms = await this.getAntonyms(word); 
            var examples = await this.getExamples(word);
            resolve('<!DOCTYPE html><html><body>'+synonyms+antonyms+examples+'</body></html>');
        });
    }
};