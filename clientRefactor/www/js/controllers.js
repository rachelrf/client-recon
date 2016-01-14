angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {
    $scope.friends = [
      {
      img: "/img/rachel.jpg",
      name: "Rachel RoseFigura",
      email: "rachel@gmail.com",
      phone: "650-713-1142"
      },
      {
      img: "/img/gloria.jpg",
      name: "Gloria Ma",
      email: "gloria@gmail.com",
      phone: "214-421-1112"
      },
      {
      img: "/img/max.jpg",
      name: "Max O'Connell",
      email: "max@gmail.com",
      phone: "609-838-2212"
      },
      {
      img: "/img/greg.jpg",
      name: "Greg Domorski",
      email: "greg.domorski@gmail.com",
      phone: "908-601-6910"
      }
    ];

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

.controller('FriendsCtrl', function(){


})

.controller('ChatsCtrl', function($scope, Chats) {

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };


  // images 
  $scope.images = [{id: 0, src:'http://bit.ly/1PszWnJ'}, {id: 1, src:'http://bit.ly/1RFfeaG'},{id: 2, src:'http://bit.ly/1SjoUY3'},{id: 3, src:'//bit.ly/1OQefBQ'},{id: 4, src: 'http://bit.ly/1n0ynaa'}, {id: 5, src:'http://bit.ly/1RFfeaG'},{id: 6, src:'http://bit.ly/1SjoUY3'},{id: 7, src: 'http://bit.ly/1PszWnJ'},{id: 8, src:'//bit.ly/1OQefBQ'},{id: 9, src: 'http://bit.ly/1n0ynaa'}, {id: 10, src:'http://bit.ly/1RFfeaG'},{id: 11, src:'//bit.ly/1OQefBQ'},{id: 12, src:'http://bit.ly/1SjoUY3'},{id: 13, src:'//bit.ly/1OQefBQ'}];
});


