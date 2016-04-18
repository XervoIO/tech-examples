//Lets load the redis module.
var redis = require("redis");

//Lets create a client for redis. this client will communicate to server.
var client = redis.createClient(6379, '127.0.0.1', {/*options*/});

//Handle error event
client.on('error', function (err) {
  console.log(err);
});

//Listen for when redis is ready to receive commands.
client.on('ready', function () {
  console.log('Hurray! We are ready!');

  //Do stuff here...

});
