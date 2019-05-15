function define(name, value) {
    Object.defineProperty(exports, name, {
        value:      value,
        enumerable: true
    });
}

define("api_key", '6fa8390c82a4c5804a8ac21f61731349318550812bdd23e4a9ac51c350f6c7893ca4e70b082278817da35871dfb2d9f8106ef0670930f06d15732a8cac97ec2f7f3fa55fb8ea754de4c94da8a8c22394');
define("randomWordurl", 'https://fourtytwowords.herokuapp.com/words/randomWord?api_key=');
define("baseUrl", 'https://fourtytwowords.herokuapp.com/word/');
define("definitionsEndpoint", '/definitions?api_key=');