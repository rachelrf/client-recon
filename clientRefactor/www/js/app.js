angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {



  $ionicConfigProvider.backButton.previousTitleText(false);
  $ionicConfigProvider.backButton.icon('ion-chevron-left');
  $ionicConfigProvider.backButton.text('');

  $stateProvider

  // Login page
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })

  // Navigation bar on non-friend-specific pages
  // Used solely for navigation while testing
  // Will not exist in production
  .state('tab', {
    url: '/tab',
    abstract: true, // indicates this is not a stand-alone page
    templateUrl: 'templates/tabs.html'
  })

  // Home page that shows all friends
  .state('tab.home', {
    url: '/home',
    views: {
      'home': {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl',
        // authenticate: true
      }
    }
  })

  .state('friends', {
    url: "/friends/:id",
    templateUrl: "templates/friends.html",
    controller: 'FriendsCtrl',
    // authenticate: true
  })

  // ---- Friend-specific pages ----
  // Home page that displays their latest social media
  // .state('fTab.friends', {
  //   // url: '/friends/:id',
  //   url: '/friends',
  //   views: {
  //     'friends': {
  //       templateUrl: 'templates/friends.html',
  //       controller: 'FriendsCtrl',
  //       // authenticate: true
  //     }
  //   }
  // })

  // Edit page that allows updating of their information
  // .state('fTab.edit', {
  //   url: '/friends/:id/edit',
  //   views: {
  //     'tab-edit': {
  //       templateUrl: 'templates/edit.html',
  //       controller: 'EditCtrl',
  //       // authenticate: true
  //     }
  //   }
  // })

  // Events page that displays their upcoming events
  // Also allows user to add new events
  // .state('fTab.events', {
  //   url: '/friends/:id/events',
  //   views: {
  //     'tab-events': {
  //       templateUrl: 'templates/events.html',
  //       controller: 'EventsCtrl',
  //       // authenticate: true
  //     }
  //   }
  // })

  // Gifts page that displays suggested Amazon products
  .state('fTab.gifts', {
    // url: '/friends/:id/gifts',
    url: '/gifts',
    views: {
      'tab-gifts': {
        templateUrl: 'templates/tab-gifts.html',
        controller: 'GiftsCtrl',
        // authenticate: true
      }
    }
  })

  // Currently holding page to what will become /friends
  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });
  // ---- end friend-specific pages ----

  $urlRouterProvider.otherwise('/login');


});



/*


'use strict';

angular.module('client-recon', [
'ui.router',
'client-recon.dashboard',
'client-recon.appState',
'client-recon.services',
'client-recon.client-profile',
'client-recon.client-profile.bio',
'client-recon.new-client',
'client-recon.client-profile.feed',
'client-recon.edit-client'
])
.config(function ($stateProvider, $httpProvider, $urlRouterProvider) {
 $urlRouterProvider.otherwise('/');
 $stateProvider
   .state('dashboard', {
     url: '/',
     templateUrl: 'app/dashboard/dashboard.html',
     controllerAs: 'dashboard',
     controller: 'DashboardController'
   })
   .state('client-profile', {
     url: '/client-profile',
     templateUrl: 'app/client-profile/client-profile.html',
     controllerAs: 'clientProfile',
     controller: 'ClientProfileController'
   })
   .state('client-profile.bio',{
    parent:'client-profile',
     views:{
      'bio':{
        templateUrl: 'app/client-profile/bio/bio.html',
        controllerAs: 'bio',
        controller: 'BioController'
      },
      'feed':{
        templateUrl: 'app/client-profile/feed/feed.html',
        controllerAs: 'feed',
        controller: 'FeedController'
      }
     }
   })
   .state('new-client', {
    url: '/new-client',
    templateUrl: 'app/new-client/new-client.html',
    controllerAs: 'newClientCtrl',
    controller: 'NewClientController'
   })
   .state('edit-client', {
    url: '/edit-client',
    templateUrl: 'app/edit-client/edit-client.html',
    controllerAs:'editClientCtrl',
    controller: 'EditClientController'
   });

 });



*/
