//Lets load the request module
var request = require("request");

//Define your host and port. This is where your database is running. Here its on loacalhost.
var host = 'localhost',
  port = 7474;

//This is the url where we will POST our data to fire the cypher query. This is specified in Neo4j docs.
var httpUrlForTransaction = 'http://' + host + ':' + port + '/db/data/transaction/commit';

//Lets define a function which fires the cypher query.
function runCypherQuery(query, params, callback) {
  request.post({
      uri: httpUrlForTransaction,
      json: {statements: [{statement: query, parameters: params}]}
    },
    function (err, res, body) {
      callback(err, body);
    })
}

/**
 * Lets fire some queries below.
 * */
runCypherQuery(
  'CREATE (somebody:Person { name: {name}, from: {company}, age: {age} }) RETURN somebody', {
    name: 'Ghuffran',
    company: 'Modulus',
    age: 44
  }, function (err, resp) {
    if (err) {
      console.log(err);
    } else {
      console.log(resp);
    }
  }
);
