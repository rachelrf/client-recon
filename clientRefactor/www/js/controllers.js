//default - should be modified for production
var USER_ID = 1;
var CLIENT_ID = 1;

angular.module('starter.controllers', ['client-recon.services'])

.controller('HomeCtrl', function($scope, FriendsService) {

    $scope.friends = FriendsService.friends;
    $scope.showRemove = false;

    $scope.destroyFriend = function($index){
      $scope.friends.splice($index, 1);
    };

    $scope.moveFriend = function (friend, fromIndex, toIndex){
      $scope.friends.splice(fromWhere, 1);
      $scope.friends.splice(toWhere, 0, friend);
    };

})

.controller('LoginCtrl', function(){


})

.controller('FriendsCtrl', function($scope, $stateParams, FriendsService){
  $scope.friendId = $stateParams.id;
  $scope.friends = FriendsService.getFriend($stateParams.id);
})

.controller('GiftsCtrl', function($scope, ClientsApi) {
  $scope.loading = true;
  $scope.gifts = 'Lol';
  //$scope.subscriptions = AppState.state.currentClient.feed;
  
  console.log('running');
  ClientsApi.getGifts(USER_ID, CLIENT_ID)
  .then(function(gifts) {
    console.log('got gifts');
    $scope.loading = false;
    $scope.gifts = gifts;

    //should input client_interest? or client_team || whatever you want
  });
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };


  function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  }


  // images 
  // $scope.images = [{id: 0, src:'http://bit.ly/1PszWnJ'}, {id: 1, src:'http://bit.ly/1RFfeaG'},{id: 2, src:'http://bit.ly/1SjoUY3'},{id: 3, src:'//bit.ly/1OQefBQ'},{id: 4, src: 'http://bit.ly/1n0ynaa'}, {id: 5, src:'http://bit.ly/1RFfeaG'},{id: 6, src:'http://bit.ly/1SjoUY3'},{id: 7, src: 'http://bit.ly/1PszWnJ'},{id: 8, src:'//bit.ly/1OQefBQ'},{id: 9, src: 'http://bit.ly/1n0ynaa'}, {id: 10, src:'http://bit.ly/1RFfeaG'},{id: 11, src:'//bit.ly/1OQefBQ'},{id: 12, src:'http://bit.ly/1SjoUY3'},{id: 13, src:'//bit.ly/1OQefBQ'}];
  var twitterImage = 'http://i.imgur.com/kRkImN3.png';
  var tumblrImage = 'http://i.imgur.com/RMUDK4n.png';
  $scope.images = [];

});