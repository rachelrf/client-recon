var queryString = require('../../db/psql/index.js');
var db = require('../../db/config.js');
var _ = require('lodash');

//rename to addOne
module.exports.insertUser = function (data, callback) {
	db.query(queryString.insertUser, data)
	.then(function (result) {
		callback(null, result);
	})
	.catch(function (err) {
		callback(err, null);
	});
};

//rename to getOne
module.exports.getUserById = function (id, callback) {
	db.query(queryString.getUserById, id)
	.then(function (result) {
		callback(null, result);
	})
	.catch(function (err) {
		callback(err, null);
	});
};