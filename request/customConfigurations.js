//Load the request module
var request = require('request');

//Lets configure and request
request({
    url: 'http://modulus.io', //URL to hit
    qs: {from: 'blog example', time: +new Date()}, //Query string data
    method: 'GET',
    headers: {
        'Content-Type': 'MyContentType',
        'Custom-Header': 'Custom Value'
    }
}, function(error, response, body){
    if(error) {
        console.log(error);
    } else console.log(response.statusCode, body);
});