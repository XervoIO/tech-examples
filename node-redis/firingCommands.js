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

  //Last argument is callback which is optional
  client.set('Name', 'Redis Demo');

  client.set('Date', new Date(), redis.print);

  client.mget(['Name', 'Date'], function (err, reply) {
    if (err) {
      return console.log(err);
    }
    //Reply will be an array in case of multiple returns from the redis command.
    console.log('Program Type: %s , Last Updated: %s', reply[0], reply[1]);
  });
});
