var queryString = require('../../db/psql/index.js');
var db = require('../../db/config.js');
var _ = require('lodash');

//rename to addOne
module.exports.addOne = function (data, callback) {
	db.query(queryString.insertUser, data)
	.then(function (result) {
		callback(null, result);
	})
	.catch(function (err) {
		callback(err, null);
	});
};

//rename to getOne
module.exports.getOne = function (userId, callback) {
	db.query(queryString.getUserById, userId)
	.then(function (result) {
		callback(null, result);
	})
	.catch(function (err) {
		callback(err, null);
	});
};