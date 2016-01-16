var db = require('./config.js');

//SCHEMAS ---------------------------------------------
//Cannot use USER as a table name || forbidden words: http://www.postgresql.org/docs/current/interactive/sql-keywords-appendix.html
db.query(
  "CREATE TABLE IF NOT EXISTS users ("
  + "id VARCHAR(255) PRIMARY KEY,"
  + "name VARCHAR(255),"
  + "phone VARCHAR(40)"
  + ");"
)
.then(function(){
  console.log('users created');
  return db.query(
    "CREATE TABLE IF NOT EXISTS friends ("
    + "id SERIAL PRIMARY KEY,"
    + "user_id VARCHAR(255),"
    + "FOREIGN KEY (user_id) REFERENCES users(id),"
    + "name VARCHAR(40),"
    + "email VARCHAR(40)," 
    + "phone VARCHAR(40),"
    + "birthday DATE,"
    + "zipcode VARCHAR(5)," 
    + "image_url VARCHAR(1000),"
    + "twitter_username VARCHAR(1000),"
    + "instagram_username VARCHAR(1000),"
    + "tumblr_username VARCHAR(1000),"
    + "interests VARCHAR(200)"
    + ");"
  );
})
.then(function(){
  console.log('friends created');
  return db.query(
    "CREATE TABLE IF NOT EXISTS events ("
    + "id SERIAL PRIMARY KEY,"
    + "friend_id INT,"
    + "FOREIGN KEY (friend_id) REFERENCES friends(id),"
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

module.exports = db;