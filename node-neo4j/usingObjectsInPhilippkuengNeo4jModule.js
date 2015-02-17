//Require the Neo4J module
var neo4j = require('node-neo4j');

//Create a db object. We will using this object to work on the DB.
db = new neo4j('http://localhost:7474');


//Lets create a node
db.insertNode({
  name: 'Ghuffran',
  company: 'Modulus',
  age: ~~(Math.random() * 100)
}, function (err, node) {
  if (err) {
    return console.log(err);
  }

  // Output node data.
  console.log(node);
});
