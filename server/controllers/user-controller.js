var User = require('../models/user-model.js');

module.exports = {
	//THIS METHOD POSTS A NEW USER TO THE DATABASE
	post: function (res, data) {
		User.insertUser(data, function (err, response) {
			if (err) {
				console.log("Error saving user: ", err);
				res.send(500);
			} else {
				console.log("User saved! ", response);
				res.json(response);
			}
		});
	}
};