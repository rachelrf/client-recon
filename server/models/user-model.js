var queryString = require('../../db/psql/index.js');
var db = require('../../db/config.js');
var _ = require('lodash');

//SAVES NEW USER TO THE DATABASE.
module.exports.insertUser = function (data, callback) {
	db.query(queryString.insertUser, [data])
	.then(function (result) {
		callback(null, result);
	})
	.catch(function (err) {
		callback(err, null);
	});
};
