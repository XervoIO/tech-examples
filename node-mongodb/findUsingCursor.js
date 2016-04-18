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

    //We have a cursor now with our find criteria
    var cursor = collection.find({name: 'modulus user'});

    //We need to sort by age descending
    cursor.sort({age: -1});

    //Limit to max 10 records
    cursor.limit(10);

    //Skip specified records. 0 for skipping 0 records.
    cursor.skip(0);

    //Lets iterate on the result
    cursor.each(function (err, doc) {
      if (err) {
        console.log(err);
      } else {
        console.log('Fetched:', doc);
      }
    });

  }
});
