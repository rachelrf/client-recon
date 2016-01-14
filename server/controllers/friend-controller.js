var Friend = require('../models/friend-model.js');

module.exports = {
	// INSERT NEW FRIEND TO THE DATABASE AND UPDATE THE FRIEND-USER TABLE TO REFLECT THE CHANGE.
	post: function (res, data, userId) {
		Friend.insertFriend(data, userId, function (err, response) {
			if (err) {
				console.log("Insert failed: ", err);
				res.send(500);
			} else {
				console.log("Friend inserted.");
				res.send(201, response);
			};
		});
	},

	// GET FRIEND FROM THE DATABASE.
	get: function (res, friendId, userId) {
		if (typeof friendId !== 'string' || friendId.length < 1) {
			friendId = null;
		};

		Friend.getFriends(friendId, userId, function (err, response) {
			if (err) {
				console.log("Get failed: ", err);
				res.send(500);
			} else {
				console.log("Friend retrieved! ", response);
				res.json(response);
			}
		});
  	},

  	// UPDATE A FRIEND'S INFORMATION IN THE DATABASE
  	put: function (res, data, friendId, userId) {
  		Friend.updateFriend(data, friendId, userId, function (err, response) {
  			if(err) {
  				console.log("Update failed: ", err);
  			} else {
  				console.log("Friend updated! ", response);
  				res.json(response);
  			}
  		});
  	}
};

