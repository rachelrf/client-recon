var Friend = require('../models/friend-model.js');

module.exports = {
	post: function (req, res, userId) {
		Friend.insertFriend(req.body, userId, function (err, response) {
			if (err) {
				console.log("Insert failed");
				res.send(500);
			} else {
				console.log("Inserted.");
				res.send(201, response);
			};
		});
	}


};