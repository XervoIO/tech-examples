//Load the request module
var request = require('request');
//Load fs module
var fs = require('fs');

//Lets define a read stream from our source file
var source = fs.createReadStream('./sampleData.json');

//Lets send our data via POST request
source.pipe(request.post('https://modulus.io/contact/demo'));