//INDEX INTERACTS WITH CONTROLLER FILE IN SERVER

//initializes db with schemas
var db = require('./schema.js');

//export functions to interact with controller
module.exports = {
  query: db.query, // function that runs raw sql strings
  sql: require('./psql') // raw sql strings
};