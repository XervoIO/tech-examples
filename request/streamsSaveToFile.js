//Load the request module
var request = require('request');
//Load fs module
var fs = require('fs');

//Lets define a write stream for our destination file
var destination = fs.createWriteStream('./savedImage.png');

//Lets save the modulus logo now
request('https://my.modulus.io/img/modulus-logoSmall-gray20.png').pipe(destination);