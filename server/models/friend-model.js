var queryString = require('../../db/psql/index.js');
var db = require('../../db/config.js');
var _ = require('lodash');

// THIS METHOD INSERTS A FRIEND INTO THE FRIENDS TABLE. IT THEN ADDS THAT FRIEND, AND THE USER ASSOCIATED WITH IT, 
// INTO A JOIN TABLE. 
module.exports.insertFriend = function (friend, userId, callback) {
	var queryParameters = [friend.client_name, friend.client_email, friend.client_birthday, 
  friend.client_company, friend.client_zipcode, friend.client_title, friend.client_image, friend.client_interests];

    return db.query(queryString.insertFriend, queryParameters)
    .then(function (friend) {
      friendId = friend[0].client_id;
      return db.query(queryString.insertFriendUsers, [userId, friendId]);
    })
    .then(function (result) {
      return callback(null, result);
      })
    .catch(function (error) {
      return callback(error, null);
      return error;
    });
};

// THIS METHOD RETURNS FRIENDS ASSOCIATED WITH A GIVEN USER(userId). IF 'friendId' IS PROVIDED, IT WILL RETURN A SINGLE USER.
// IF NOT, IT WILL RETURN ALL FRIENDS.
module.exports.getFriends = function (friendId, userId, callback) {
  if (friendId === null) {
    return db.query(queryString.getAllFriends, userId)
    .then(function (friendsList) {
      callback(null, friendsList);
    })
    .catch(function (err) {
      callback(err, null)
    });
  } else {
    // console.log('looking for one friend with id:', friendId);
    return db.query(queryString.getOneFriend, [userId, friendId])
    .then(function (friend) {
      // console.log('friend found:', friend);
      callback(null, friend);
    })
    .catch(function (err) {
      // console.log('error finding one friend');
      callback(err, null);
    });
  };
};

// THIS METHOD UPDATES THE DATA OF A FRIEND ASSOCIATED WITH A GIVEN USER.
module.exports.updateFriend = function (data, friendId, userId, callback) {
  // take the data and make the SQL arguments
  var init = { columns: [], values: [] };
  var query = _.reduce(data, function(acc, val, key) {
    if (key !== 'feed' && key !== 'salesperson_id') {
        acc.columns.push(key);
        acc.values.push(val);
      }
      return acc;
  }, init);

    // stringify the arguments
    var columns = query.columns.join(', ');
    var values = _.map(query.values, function(value) {
      if (value === null) {
        return "''";
      } else if (typeof value === 'string') {
        return "'" + value + "'";
      } else {
        return value;
      }
    }).join(', ');
    // console.log("COLUMNS:", "typeof", typeof columns, columns);
    // console.log("VALUES:", "typeof", typeof values, values);

    // performe the db transaction
    // return a promise
  return db.query(queryString.editOneFriend, [userId, friendId, columns, values])
    .then(function(friend){
      callback(null, friend);
    })
    .catch(function(err){
      callback(err, null);
    });
};