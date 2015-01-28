//Load the request module
var request = require('request');

//Lets try to make a HTTP POST call.
request.post('https://modulus.io', function (error, response, body) {
    //Check for error
    if(error){
        return console.log('Error:', error);
    }

    //Check for right status code. If POST is not supported then there will be 404
    if(response.statusCode !== 200){
        return console.log('Invalid Status Code Returned[POST]:', response.statusCode);
    }

    //If POST is honored. Print the body
    console.log(body); // Show the HTML for the Modulus homepage.

});

//Lets try to make a HTTP DELETE call.
request.del('https://modulus.io', function (error, response, body) {
    //Check for error
    if(error){
        return console.log('Error:', error);
    }

    //Check for right status code. If DELETE is not supported then there will be 404
    if(response.statusCode !== 200){
        return console.log('Invalid Status Code Returned[DELETE]:', response.statusCode);
    }

    //If DELETE is honored. Print the body
    console.log(body); // Show the HTML for the Modulus homepage.

});

//Lets try to make a HTTP PUT call.
request.put('https://modulus.io', function (error, response, body) {
    //Check for error
    if(error){
        return console.log('Error:', error);
    }

    //Check for right status code. If PUT is not supported then there will be 404
    if(response.statusCode !== 200){
        return console.log('Invalid Status Code Returned[PUT]:', response.statusCode);
    }

    //If PUT is honored. Print the body
    console.log(body); // Show the HTML for the Modulus homepage.

});

//Lets try to make a HTTP PATCH call.
request.patch('https://modulus.io', function (error, response, body) {
    //Check for error
    if(error){
        return console.log('Error:', error);
    }

    //Check for right status code. If PATCH is not supported then there will be 404
    if(response.statusCode !== 200){
        return console.log('Invalid Status Code Returned[PATCH]:', response.statusCode);
    }

    //If PATCH is honored. Print the body
    console.log(body); // Show the HTML for the Modulus homepage.

});