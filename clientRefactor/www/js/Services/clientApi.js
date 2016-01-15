'use strict';

var SERVER_ROOT = 'http://localhost:3000';

angular.module('client-recon.services', [])
  .factory('ClientsApi', function($http, $q){

    // make http request to server with current user object
    var getAll = function(user_id){
      return $http.get('/api/users/' + user_id + '/clients')
        .then(function(res){
        // this returns a promise, we need to update state
          return res.data;
        });
    }

    var addOne = function(user_id, clientObj){
      return $http.post('/api/users/' + user_id + '/clients', clientObj)
        .then(function(res){
          return res.data;
        })
    }

    var editOne = function(user_id, editedClient){
      //currently user is hard coded
      return $http.put('/api/users/' + user_id + '/clients/' + editedClient.client_id, editedClient)
        .then(function(res){
          return res.data;
        });
    }

    //Gets Amazon, Bing, and Weather results
    var getFeed = function(user_id, client_id) {
      //currently user is hard coded
        console.log('here: ', user_id, client_id)
      
      return $http.get('/api/users/' + user_id + '/clients/' + client_id + '/feed')
        .then(function(res){
          return res.data;
        });
    }

    var getTickets = function(team) {
      team = team.split(' ').join('-');
      return $http.get('http://api.seatgeek.com/2/events?performers.slug=' + team)
        .then(function(res){
          return res.data;
        });
    }

    // Gets Amazon results (only)
    var getGifts = function(user_id, client_id) {
      return $http.get(SERVER_ROOT + '/api/users/' + user_id + '/clients/' + client_id + '/gifts')
      .then(function(res) {
        return res.data;
      });
    };

    var getPosts = function(friend_id) {
      console.log('2. in ClientsApi, about to call route')
      return $http.get(SERVER_ROOT + '/api/clients/' + friend_id + '/posts')
      .then(function(res) {
        return res.data;
      });
    };

    return {
      getAll: getAll,
      addOne: addOne,
      editOne: editOne,
      getFeed: getFeed,
      getTickets: getTickets,
      getGifts: getGifts,
      getPosts: getPosts
    }
  });
