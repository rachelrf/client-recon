var queryString = require('../../db/psql/index.js');
var db = require('../../db/config.js');
var _ = require('lodash');

// helper function
var callCallbackOnResults = function(promise, callback) {
  return promise
  .then(function(results) {
    callback(null, results);
  })
  .catch(function(err) {
    callback(err, null);
  });
};

// ---- Export functions ----
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

  var promise = db.query(queryString.addOneFriend, queryParameters);
  return callCallbackOnResults(promise, callback);
};

exports.getAllForUser = function(userId, callback) {
  var promise = db.query(queryString.getAllFriendsForUser, userId)
  return callCallbackOnResults(promise, callback);
};

exports.getOne = function (friendId, callback) {
  var promise = db.query(queryString.getOneFriend, friendId)
  return callCallbackOnResults(promise, callback);
};

exports.updateOne = function (friendId, data, callback) {
  // take the data and make the SQL arguments
  var init = { columns: [], values: [] };
  var query = _.reduce(data, function(acc, val, key) {
    acc.columns.push(key);
    acc.values.push(val);
    return acc;
  }, init);

  // stringify the arguments
  var columns = query.columns.join(', ');
  var values = _.map(query.values, function(value) {
    if (value === null) {
      return "null";
    } else if (typeof value === 'string') {
      return "'" + value + "'";
    } else {
      return value;
    }
  }).join(', ');
  // console.log("COLUMNS:", "typeof", typeof columns, columns);
  // console.log("VALUES:", "typeof", typeof values, values);

  // performe the db transaction
  var promise = db.query(queryString.updateOneFriend, [friendId, columns, values]);
  return callCallbackOnResults(promise, callback);
};

exports.deleteOne = function(friendId, callback) {
  var promise = db.query(queryString.deleteOneFriend, friendId);
  return callCallbackOnResults(promise, callback);
};