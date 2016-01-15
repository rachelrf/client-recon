var Friend = require('../models/friend-model.js');

var makeCallback = function(res, actionString) {
  actionString = actionString || '';
  return function(err, results) {
    if (err) {
      console.log(actionString, 'failed:', err);
      res.send(500);
    } else {
      console.log(actionString, 'succeeded:', results);
      res.json(results);
    }
  };
};

module.exports = {
	addOne: function(userId, friendObj, res) {
    Friend.addOne(userId, friendObj, makeCallback(res, 'add one friend for user ' + userId));
  },

  getAllForUser: function(userId, res) {
    Friend.getAllForUser(userId, makeCallback(res, 'get all friends for user ' + userId));
  },

	getOne: function(friendId, res) {
		Friend.getOne(friendId, makeCallback(res, 'get one friend'));
	},

	updateOne: function(friendId, data, res) {
		Friend.updateOne(friendId, data, makeCallback(res, 'update one friend'));
	},

  deleteOne: function(friendId, res) {
    Friend.deleteOne(friendId, makeCallback(res, 'delete one friend'));
  },

  getPosts: function(friendId, res) {
    Friend.getPosts(friendId, makeCallback(res, 'get posts for friend'));
  },
  
  getGifts: function(friendId, res) {
    Friend.getGifts(friendId, makeCallback(res, 'get gifts for friend'));
  }
};

