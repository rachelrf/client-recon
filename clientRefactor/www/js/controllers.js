angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

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


