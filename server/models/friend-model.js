//var db = require('../../db/psql/insertUser.js');
var queryString = require('../../db/psql/index.js');
var db = require('../../db/config.js');

// THIS METHOD INSERTS A FRIEND INTO THE FRIENDS TABLE. IT THEN ADDS THAT FRIEND, AND THE USER ASSOCIATED WITH IT, 
// INTO A JOIN TABLE. 
module.exports.insertFriend = function(friend, userId, callback) {
	var queryParameters = [friend.client_name, friend.client_email, friend.client_birthday, 
  friend.client_company, friend.client_zipcode, friend.client_title, friend.client_image, friend.client_interests];

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

// THIS METHOD RETURNS FRIENDS ASSOCIATED WITH A GIVEN USER(userId). IF 'friendId' IS PROVIDED, IT WILL RETURN A SINGLE USER.
// IF NOT, IT WILL RETURN ALL FRIENDS.
module.exports.getFriends = function(friendId, userId, callback) {
  if (friendId === null) {
    return db.query(queryString.getAllFriends, userId)
    .then(function(friendsList){
      callback(null, friendsList);
    })
    .catch(function(err){
      callback(err, null)
    });
  } else {
    return db.query(queryString.getOneFriend, [userId, friendId])
    .then(function(friend){
      callback(null, friend);
    })
    .catch(function(err){
      callback(err, null);
    });
  };
};


