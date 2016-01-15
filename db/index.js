//INDEX INTERACTS WITH CONTROLLER FILE IN SERVER

//init db
require('./schema.js');

var db = require('./config');

//export functions to interact with controller
module.exports = {
  query: db.query, // function that runs raw sql strings
  sql: require('./psql') // raw sql strings
};