//Require the Neo4J module
var neo4j = require('neo4j');

//Create a db object. We will using this object to work on the DB.
var db = new neo4j.GraphDatabase('http://localhost:7474');


//Run raw cypher with params
db.cypher({
    query: 'CREATE (somebody:Person { name: {name}, from: {company}, age: {age} }) RETURN somebody',
    params: {
      name: 'Ghuffran',
      company: 'Modulus',
      age: 44
    }
  }, function () {
    console.log(arguments);
  }
);

//Run cypher without params (Short notation)
db.cypher('CREATE (somebody:Person { name: "My Name", from: "My Company", age: 21 }) RETURN somebody',
  function () {
    console.log(arguments);
  }
);
