var User = require('../models/user-model.js');

module.exports = {
	//POST A NEW USER TO THE DATABASE
	addOne: function (res, data) {
		User.addOne(data, function (err, response) {
			if (err) {
				console.log("Error saving user: ", err);
				res.send(500);
			} else {
				console.log("User saved! ", response);
				res.json(response);
			}
		});
	},

	//FIND A USER BY ID
	getOne: function (res, id) {
		User.getOne(id, function (err, response) {
			if (err) {
				console.log("Error finding user: ", err);
			} else {
				console.log("User found! ", response);
				res.json(response);
			}
		});
	}
};