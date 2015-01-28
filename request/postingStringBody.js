//Load the request module
var request = require('request');

//Lets configure and request
request({
    url: 'https://modulus.io/contact/demo', //URL to hit
    qs: {from: 'blog example', time: +new Date()}, //Query string data
    method: 'POST',
    headers: {
        'Content-Type': 'MyContentType',
        'Custom-Header': 'Custom Value'
    },
    body: 'Hello Hello! String body!'
}, function(error, response, body){
    if(error) {
        console.log(error);
    } else console.log(response.statusCode, body);
});