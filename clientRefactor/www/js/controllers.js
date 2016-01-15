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

.controller('PostsCtrl', function($stateParams, $scope, FriendsService, Friends){
  console.log('Friend ID' + $scope.friendsId);
  $scope.friends = FriendsService.getFriend($stateParams.id);

  // Maybe needed? unclear from merge conflict
  // $scope.posts = Friends.getPosts($stateParams.friendId)
  // .then(function(posts) {
  //   $scope.loading = false;
  //   $scope.posts = posts;
  // });

  function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  }

  console.log('1. in js/controllers.js, about to call Friends.getPosts', $stateParams.friendId) // currently set to 1?
  $scope.posts = Friends.getPosts($stateParams.id)
  .then(function(posts) {
    $scope.loading = false;
    $scope.posts = posts;
  });

  // images
  // $scope.images = [{id: 0, src:'http://bit.ly/1PszWnJ'}, {id: 1, src:'http://bit.ly/1RFfeaG'},{id: 2, src:'http://bit.ly/1SjoUY3'},{id: 3, src:'//bit.ly/1OQefBQ'},{id: 4, src: 'http://bit.ly/1n0ynaa'}, {id: 5, src:'http://bit.ly/1RFfeaG'},{id: 6, src:'http://bit.ly/1SjoUY3'},{id: 7, src: 'http://bit.ly/1PszWnJ'},{id: 8, src:'//bit.ly/1OQefBQ'},{id: 9, src: 'http://bit.ly/1n0ynaa'}, {id: 10, src:'http://bit.ly/1RFfeaG'},{id: 11, src:'//bit.ly/1OQefBQ'},{id: 12, src:'http://bit.ly/1SjoUY3'},{id: 13, src:'//bit.ly/1OQefBQ'}];
  var twitterImage = 'http://i.imgur.com/kRkImN3.png';
  var tumblrImage = 'http://i.imgur.com/RMUDK4n.png';
  $scope.images = shuffle([ { source: 'twitter',
    type: 'text',
    text: 'Anyone loving TAPIR as much as I am?!? https://t.co/KHduurvQRw',
    imageUrl: 'http://i.imgur.com/kRkImN3.png' },
  { source: 'twitter',
    type: 'text',
    text: 'after acting, modeling, and philanthropy my favorite thing to do is hack on containerized deployment scripts! #nerd https://t.co/JR2XWwkPYe',
    imageUrl: 'http://i.imgur.com/kRkImN3.png' },
  { source: 'twitter',
    type: 'text',
    text: '#casual #hautecouture #nofuckstogive https://t.co/iCmqVc5YON',
    imageUrl: 'http://i.imgur.com/kRkImN3.png' },
  { source: 'twitter',
    type: 'text',
    text: 'I\'m the new spokesperson for ChapStick®, America’s favorite lip balm &lt;3 *smooches*',
    imageUrl: 'http://i.imgur.com/kRkImN3.png' },
  { source: 'instagram',
    type: 'photo',
    text: 'New Instagram post!',
    imageUrl: 'https://scontent-sjc2-1.cdninstagram.com/hphotos-xpt1/t51.2885-15/s480x480/e35/12543392_1122857787724325_441795988_n.jpg' },
  { source: 'instagram',
    type: 'photo',
    text: 'New Instagram post!',
    imageUrl: 'https://scontent-sjc2-1.cdninstagram.com/hphotos-xta1/t51.2885-15/s480x480/e35/12558346_986179388117727_1335876675_n.jpg' },
  { source: 'instagram',
    type: 'photo',
    text: 'New Instagram post!',
    imageUrl: 'https://scontent-sjc2-1.cdninstagram.com/hphotos-xpt1/t51.2885-15/s320x320/e35/12545301_643481169124863_182600117_n.jpg' },
  { source: 'instagram',
    type: 'photo',
    text: 'New Instagram post!',
    imageUrl: 'https://scontent-sjc2-1.cdninstagram.com/hphotos-xap1/t51.2885-15/s480x480/e35/12407481_151646428542103_1632334468_n.jpg' },
  { source: 'instagram',
    type: 'photo',
    text: 'New Instagram post!',
    imageUrl: 'https://scontent-sjc2-1.cdninstagram.com/hphotos-xap1/t51.2885-15/s480x480/e35/12547592_1520600001567454_1144228823_n.jpg' },
  { source: 'tumblr',
    type: 'text',
    text: 'New post: Reblog if you <3 Tumblr!',
    imageUrl: 'http://i.imgur.com/RMUDK4n.png' },
  { source: 'tumblr',
    type: 'text',
    text: 'New post: Keen IO liked my tweet #famous',
    imageUrl: 'http://i.imgur.com/RMUDK4n.png' },
  { source: 'tumblr',
    type: 'text',
    text: 'New post: If programmers wrote more recipes, then more people would program',
    imageUrl: 'http://i.imgur.com/RMUDK4n.png' },
  { source: 'tumblr',
    type: 'photo',
    text: 'Re-blogged: But first… ☕️',
    imageUrl: 'http://i.imgur.com/RMUDK4n.png' },
  { source: 'tumblr',
    type: 'photo',
    text: 'Re-blogged: ',
    imageUrl: 'http://i.imgur.com/RMUDK4n.png' },
  { source: 'tumblr',
    type: 'photo',
    text: 'Re-blogged: My blind, three-legged dog had been slipping on floors a lot. So we bought her these grippy socks! (Source:...',
    imageUrl: 'http://i.imgur.com/RMUDK4n.png' } ]);
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
