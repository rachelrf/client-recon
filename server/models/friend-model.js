var queryString = require('../../db/psql/index.js');
var db = require('../../db/config.js');
var _ = require('lodash');

// --- Pure db interaction ----
exports.addOne = function (userId, friendObj, callback) {
	var queryParameters = [
    userId,
    friendObj.name,
    friendObj.email,
    friendObj.birthday, 
    friendObj.zipcode,
    friendObj.imageUrl,
    friendObj.interests,
    friendObj.twitterUrl,
    friendObj.instagramUrl,
    friendObj.tumblrUrl
  ];

    return db.query(queryString.addOneFriend, queryParameters)
    .then(function (friends) {
      friendId = friends[0].client_id;
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

exports.getAllForUser = function(userId, callback) {
  return db.query(queryString.getAllFriendsForUser, userId)
    .then(function (friendsList) {
      callback(null, friendsList);
    })
    .catch(function (err) {
      callback(err, null)
    });
};

// THIS METHOD RETURNS FRIENDS ASSOCIATED WITH A GIVEN USER(userId).
exports.getOne = function (friendId, callback) {
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

// THIS METHOD UPDATES THE DATA OF A FRIEND ASSOCIATED WITH A GIVEN USER.
exports.updateOne = function (data, friendId, callback) {
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

exports.deleteOne = function(friendId, callback) {

};

// ---- External APIs ----

exports.getPosts = function(friendId) {

};

exports.getGifts = function(friendId) {

};