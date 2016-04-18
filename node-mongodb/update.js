//lets require(import) the mongodb native drivers.
var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/my_database_name';

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connection established to', url);

    // Get the documents collection
    var collection = db.collection('users');

    // Insert some users
    collection.update({name: 'modulus user'}, {$set: {enabled: false}}, function (err, numUpdated) {
      if (err) {
        console.log(err);
      } else if (numUpdated) {
        console.log('Updated Successfully %d document(s).', numUpdated);
      } else {
        console.log('No document found with defined "find" criteria!');
      }
      //Close connection
      db.close();
    });
  }
});
