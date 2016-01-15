//default - should be modified for production
var USER_ID = 1;
var CLIENT_ID = 1;

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

.controller('EditCtrl', function($stateParams, $scope) {

})

.controller('PostsCtrl', function($stateParams, $scope, FriendsService){
  $scope.friendId = $stateParams.friendId;
  $scope.friends = FriendsService.getFriend($stateParams.friendId);

  // rachel's code for a dummy data
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
  // end rachel's code
})

.controller('EventsCtrl', function($stateParams, $scope) {

})

.controller('GiftsCtrl', function($stateParams, $scope, ClientsApi) {
  $scope.client_id = $stateParams.friendId;
  $scope.loading = true;
  $scope.gifts = 'Loading gift suggestions...';
  //$scope.subscriptions = AppState.state.currentClient.feed;
  
  console.log('running');
  ClientsApi.getGifts(USER_ID, CLIENT_ID)
  .then(function(gifts) {
    console.log('got gifts');
    $scope.loading = false;
    $scope.gifts = gifts;

    //should input client_interest? or client_team || whatever you want
  });
});