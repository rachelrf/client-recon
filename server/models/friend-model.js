//var db = require('../../db/psql/insertUser.js');
var queryString = require('../../db/psql/index.js');
var db = require('../../db/config.js');

// THIS METHOD INSERTS A FRIEND INTO THE FRIENDS TABLE. IT THEN ADDS THAT FRIEND, AND THE USER ASSOCIATED WITH IT, 
// INTO A JOIN TABLE. 
module.exports.insertFriend = function(friend, userId, callback){
	var queryParameters = [friend.client_name, friend.client_email, friend.client_birthday, 
  friend.client_company, friend.client_zipcode, friend.client_title, friend.client_image];

    return db.query(queryString.insertFriend, queryParameters)
    .then(function(friend) {
      friendId = friend[0].client_id;
      return db.query(queryString.insertFriendUsers, [userId, friendId]);
    })
    .then(function(result) {
      return callback(null, result);
      })
    .catch(function(error){
      return callback(error, null);
      return error;
    });
};

// module.exports.getOneFriend = function(friendId, callback){
//   return db.query('Select * from users where user__id = $1', [friendId])
//     .then(function(result){
//       console.log(result)
//     });
// }