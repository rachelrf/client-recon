'use strict';

var SERVER_ROOT = 'http://localhost:3000';

servicesModule
.factory('Events', function($http){

  // helper function to extract data from response
  var getData = function(res) {
    return res.data;
  };

  // ---- Export functions ----
  var addOne = function(friendId, eventObj){
    return $http.post(SERVER_ROOT + '/api/friends/' + friendId + '/events', eventObj)
    .then(getData);
  };

  var getAllForFriend = function(friendId){
    return $http.get(SERVER_ROOT + '/api/friends/' + friendId + '/events')
    .then(getData);
  }

  var getOne = function(eventId) {
    return $http.get(SERVER_ROOT + '/api/events/' + eventId)
    .then(getData);
  };

  var updateOne = function(eventId, newEventObj){
    return $http.put(SERVER_ROOT + '/api/events/' + eventId, newEventObj)
    .then(getData);
  }

  var deleteOne = function(eventId){
    return $http.delete(SERVER_ROOT + '/api/events/' + eventId)
    .then(getData);
  }

  var prettifyDate = function(dateStr) { //date is of format TIMESTAMP from sql
    var dateObj = new Date(dateStr);
    var month = (dateObj.getUTCMonth()+1 % 12);
    var date = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    var hours = (dateObj.getHours() + 4) % 24; // 24 hour clock, but then plus 4 for timezone
    var minutes = dateObj.getMinutes();

    var monthString = month;
    var dateString = date;
    var yearString = year;

    var hoursString = (hours % 12 === 0 ? 12 : hours % 12).toString();
    var minutesString = ((minutes <= 10) ? '0' : '') + minutes.toString();
    var suffix = (hours <= 12) ? 'am' : 'pm';
    console.log(hoursString + ":" + minutesString + suffix);
    return monthString + '/' + dateString + '/' + yearString + ', ' + hoursString + ":" + minutesString + suffix;
  };

  return {
    addOne: addOne,
    getAllForFriend: getAllForFriend,
    getOne: getOne,
    updateOne: updateOne,
    deleteOne: deleteOne,
    prettifyDate: prettifyDate
  }
});