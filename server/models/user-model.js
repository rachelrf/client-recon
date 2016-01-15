var queryString = require('../../db/psql/index.js');
var db = require('../../db/config.js');
var _ = require('lodash');

exports.addOne = function (data, callback) {
	db.query(queryString.addOneUser, data)
	.then(function (result) {
		callback(null, result);
	})
	.catch(function (err) {
		callback(err, null);
	});
};

exports.getOne = function (userId, callback) {
	db.query(queryString.getOneUser, userId)
	.then(function (result) {
		callback(null, result);
	})
	.catch(function (err) {
		callback(err, null);
	});
};