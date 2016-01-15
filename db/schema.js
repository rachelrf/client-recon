var db = require('./config.js');


//SCHEMAS ---------------------------------------------
//Cannot use USER as a table name || forbidden words: http://www.postgresql.org/docs/current/interactive/sql-keywords-appendix.html
db.query(
  "CREATE TABLE IF NOT EXISTS users ("
  + "id VARCHAR(255) PRIMARY KEY,"
  + "name VARCHAR(255)"
  + ");"
)
.then(function(){
  console.log('users created');
  return db.query(
    "CREATE TABLE IF NOT EXISTS friends ("
    + "id SERIAL PRIMARY KEY,"
    + "FOREIGN KEY (userId) REFERENCES users(id),"
    + "name VARCHAR(40),"
    + "email VARCHAR(40)," 
    + "birthday DATE,"
    + "zipcode VARCHAR(5)," 
    + "imageUrl VARCHAR(1000),"
    + "twitterUrl VARCHAR(1000),"
    + "instagramUrl VARCHAR(1000),"
    + "tumblrUrl VARCHAR(1000),"
    + "interests VARCHAR(200)"
    + ");"
  );
})
.then(function(){
  console.log('friends created');
  return db.query(
    "CREATE TABLE IF NOT EXISTS events ("
    + "id SERIAL PRIMARY KEY,"
    + "FOREIGN KEY (friendId) REFERENCES friends(id),"
    + "name VARCHAR(255),"
    + "date TIMESTAMP"
    + ");"
  );
})
.then(function(){
  console.log('events created');
})
.catch(function(error){
  console.log('error creating tables');
  console.log(error);
});

