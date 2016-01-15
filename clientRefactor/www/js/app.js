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


  $stateProvider

  .state('tempTab', {
    url: '/tempTab',
    abstract: true, // indicates this is not a stand-alone page
    templateUrl: 'templates/tempTabs.html'
  })

  // Login page
  .state('tempTab.login', {
    url: '/login',
    views: {
      'login': {
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
      }
    }
  })

  // Home page that shows all friends
  .state('tempTab.home', {
    url: '/home',
    views: {
      'home': {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl',
        // authenticate: true
      }
    }
  })

  // ---- Friend-specific pages ----

  .state('tab', {
    url: '/tab',
    abstract: true, // indicates this is not a stand-alone page
    templateUrl: 'templates/tabs.html'
  })

  // Edit page that allows updating of their information
  .state('tab.edit', {
    // url: '/friends/:id/edit',

    url: '/edit/:id',

    views: {
      'tab-edit': {
        templateUrl: 'templates/tab-edit.html',
        controller: 'EditCtrl',
        // authenticate: true
      }
    }
  })


  // Social media page that displays their recent posts
  .state('tab.friends', {
    url: '#/tab/friends/:id',
    // url: '/friends',

    views: {
      'tab-posts': {
        templateUrl: 'templates/tab-posts.html',
        controller: 'PostsCtrl',
        // authenticate: true
      }
    }
  })

  // Events page that displays their upcoming events
  // Also allows user to add new events
  .state('tab.events', {
    // url: '/friends/:id/events',
    url: '/edit/:id',

    views: {
      'tab-events': {
        templateUrl: 'templates/tab-events.html',
        controller: 'EventsCtrl',
        // authenticate: true
      }
    }
  })

  // Gifts page that displays suggested Amazon products
  .state('tab.gifts', {

    url: '/gifts/:id',

    views: {
      'tab-gifts': {
        templateUrl: 'templates/tab-gifts.html',
        controller: 'GiftsCtrl',
        // authenticate: true
      }
    }
  });



  $urlRouterProvider.otherwise('tempTab/login');



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
