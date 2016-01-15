angular.module('starter.controllers', ['client-recon.services'])

.controller('LoginCtrl', function(){


})

.controller('HomeCtrl', function($scope, FriendsService) {

  $scope.moveText = "Move";

  $scope.showOrderButton = false;
  $scope.changeReorder = function(){
      if($scope.showOrderButton === true) {
        $scope.moveText = "Move";
        $scope.showOrderButton = false;
      }else{
        $scope.moveText = "Hide Move";
        $scope.showOrderButton = true;
      }
  };

  $scope.friends = FriendsService.friends;

  $scope.destroyFriend = function($index){
    $scope.friends.splice($index, 1);
  };

  $scope.moveFriend = function (friend, fromIndex, toIndex){
    $scope.friends.splice(fromIndex, 1);
    $scope.friends.splice(toIndex, 0, friend);
  };
})

// .controller('EditCtrl', function($stateParams, $scope, $timeout, Friends) {
//   // TEMPLATE FOR DATA
//   //this.data = AppState.state;
//   var successfulPost = this.success;
//   var currentClient = null;//this.data.currentClient;

//   this.newData = currentClient;

//   this.putClient = function () {
//     //DETECT USER ID FROM APP STATE
//     console.log('about to send updated client to server');
//     Friends.updateOne($stateParams.friendId, currentClient)
//     .then(function(res){
//       // CALLED AFTER SUCCESSFUL POST
//       successfulPost = true;

//       // THE PURPOSE OF THE BELOW IS TO HAVE THE SUCCESSFUL POST 
//       // NOTIFICATION ONLY SHOW FOR A FEW SECONDS AND DISAPPEAR
//       // $timeout(function(){
//       //   successfulPost = false;
//       //   $state.go('client-profile.bio');
//       // }, 2000);
//     })
//   };
// })

.controller('PostsCtrl', function($stateParams, $scope, Friends){
  $scope.loading = true;

  console.log($stateParams.id);
  Friends.getOne($stateParams.id)
  .then(function(friends) {
    $scope.friend = friends[0];
    console.log($scope.friend);
  })

  // Eventually will just directly query server for posts
  // $scope.posts = Friends.getPosts($stateParams.friendId)
  // .then(function(posts) {
  //   $scope.loading = false;
  //   $scope.posts = posts;
  // });
})

.controller('EditCtrl', function($scope, $location, $stateParams, FriendsService, Friends) {

  $scope.friendId = $stateParams.id;
  console.log($stateParams);
  $scope.friends = FriendsService.getFriend($stateParams.id);

  $scope.goHome = function(path){
     console.log("Going Home");
     $location.path(path);
  };

  // gloria
  // TEMPLATE FOR DATA
  // var successfulPost = false;
  // $scope.friend = null;
  // Friends.getOne($stateParams.friendId)
  // .then(function(res) {
  //   console.log(res);
  //   $scope.friend = res[0];
  // })

  // $scope.updateFriend = function () {
  //   //DETECT USER ID FROM APP STATE
  //   console.log('about to send updated client to server');
  //   Friends.updateOne($stateParams.friendId, $scope.friend)
  //   .then(function(res){
  //     // CALLED AFTER SUCCESSFUL POST
  //     successfulPost = true;

  //     // THE PURPOSE OF THE BELOW IS TO HAVE THE SUCCESSFUL POST 
  //     // NOTIFICATION ONLY SHOW FOR A FEW SECONDS AND DISAPPEAR
  //     // $timeout(function(){
  //     //   successfulPost = false;
  //     //   $state.go('client-profile.bio');
  //     // }, 2000);
  //   })
  // end gloria
})

.controller('EventsCtrl', function($scope, $stateParams, FriendsService) {
  console.log($stateParams);
  $scope.friendId = $stateParams.id;
  $scope.friends = FriendsService.getFriend($stateParams.id);


})

.controller('GiftsCtrl', function($scope, $stateParams, FriendsService) {
  $scope.loading = true;
  $scope.gifts = 'Loading gift suggestions...';
  $scope.friendId = $stateParams.id;
  console.log($stateParams);
  $scope.friends = FriendsService.getFriend($stateParams.id);


  //$scope.subscriptions = AppState.state.currentClient.feed;

  // Friends.getGifts($stateParams.friendId) somethign like that
  // console.log('running');
  // ClientsApi.getGifts(USER_ID, CLIENT_ID)
  // .then(function(gifts) {
  //   $scope.loading = false;
  //   $scope.gifts = gifts;
  // });
});
