// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

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
