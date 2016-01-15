angular.module('starter.controllers', ['client-recon.services'])

.controller('LoginCtrl', function(){


})

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

.controller('EditCtrl', function($stateParams, $scope, $timeout, ClientsApi) {
  // TEMPLATE FOR DATA
  //this.data = AppState.state;
  var successfulPost = this.success;
  var currentClient = null;//this.data.currentClient;

  this.newData = currentClient;

  this.putClient = function () {
    //DETECT USER ID FROM APP STATE
    console.log('about to send updated client to server');
    ClientsApi.editOne($stateParams.friendId, currentClient)
    .then(function(res){
      // CALLED AFTER SUCCESSFUL POST
      successfulPost = true;

      // THE PURPOSE OF THE BELOW IS TO HAVE THE SUCCESSFUL POST 
      // NOTIFICATION ONLY SHOW FOR A FEW SECONDS AND DISAPPEAR
      // $timeout(function(){
      //   successfulPost = false;
      //   $state.go('client-profile.bio');
      // }, 2000);
    })
  };
})

.controller('PostsCtrl', function($stateParams, $scope, FriendsService){
  $scope.friendId = $stateParams.friendId;
  $scope.friends = FriendsService.getFriend($stateParams.friendId);

  $scope.settings = {
    enableFriends: true
  };
 
  $scope.posts = ClientsApi.getPosts($stateParams.friendId)
  .then(function(posts) {
    $scope.loading = false;
    $scope.posts = posts;
  });
  
  // rachel's code for a dummy data
  // $scope.images = [{ source: 'twitter',
  //   type: 'text',
  //   text: 'Anyone loving TAPIR as much as I am?!? https://t.co/KHduurvQRw',
  //   imageUrl: 'http://i.imgur.com/kRkImN3.png' },
  // { source: 'twitter',
  //   type: 'text',
  //   text: 'after acting, modeling, and philanthropy my favorite thing to do is hack on containerized deployment scripts! #nerd https://t.co/JR2XWwkPYe',
  //   imageUrl: 'http://i.imgur.com/kRkImN3.png' },
  // { source: 'twitter',
  //   type: 'text',
  //   text: '#casual #hautecouture #nofuckstogive https://t.co/iCmqVc5YON',
  //   imageUrl: 'http://i.imgur.com/kRkImN3.png' }];
  // end rachel's code
})

.controller('EventsCtrl', function($stateParams, $scope) {
})

.controller('GiftsCtrl', function($stateParams, $scope, ClientsApi) {
  $scope.loading = true;
  
  ClientsApi.getGifts($stateParams.userId, $stateParams.friendId)
  .then(function(gifts) {
    $scope.loading = false;
    $scope.gifts = gifts;
  });
});