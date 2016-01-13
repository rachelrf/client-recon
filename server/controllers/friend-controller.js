var Friend = require('../models/friend-model.js');

module.exports = {
	// INSERT NEW FRIEND TO THE DATABASE AND UPDATE THE FRIEND-USER TABLE TO REFLECT THE CHANGE.
	post: function (req, res, userId) {
		Friend.insertFriend(req.body, userId, function (err, response) {
			if (err) {
				console.log("Insert failed: ", err);
				res.send(500);
			} else {
				console.log("Friend inserted.");
				res.send(201, response);
			};
		});
	},

	// GET FRIEND FROM THE DATABASE
	get: function(res, friendId, userId){
		Friend.getFriends(friendId, userId, function (err, response) {
			if(err) {
				console.log("Get failed: ", err);
				res.send(500);
			} else {
				console.log("Friend retrieved! ", console.log(response));
				res.json(response);
			}
		});
  	},


};