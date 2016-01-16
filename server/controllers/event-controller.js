var Event = require('../models/event-model.js');
var socialMediaAggregator = require('../helpers/socialMediaAggregator.js');
var amazon = require('../helpers/amazon-api.js');

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
  addOne: function(friendId, eventObj, res) {
    Event.addOne(friendId, eventObj, makeCallback(res, 'add one event for friend ' + friendId));
  },

  getAllForUser: function(friendId, res) {
    Event.getAllForUser(friendId, makeCallback(res, 'get all events for friend ' + friendId));
  },

  getOne: function(eventId, res) {
    Event.getOne(eventId, makeCallback(res, 'get one event'));
  },

  updateOne: function(eventId, data, res) {
    Event.updateOne(eventId, data, makeCallback(res, 'update one event'));
  },

  deleteOne: function(eventId, res) {
    Event.deleteOne(eventId, makeCallback(res, 'delete one event'));
  }
};

