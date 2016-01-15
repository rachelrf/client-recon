var queryString = require('../../db/psql/index.js');
var db = require('../../db/config.js');
var _ = require('lodash');

exports.addOne = function (userArr, callback) {
	db.query(queryString.addOneUser, userArr)
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