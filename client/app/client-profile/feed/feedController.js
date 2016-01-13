angular.module('client-recon.client-profile.feed', [])
.controller('FeedController', function ($scope, AppState, $state, ClientsApi) {
  var feed = this;
  feed.loading = true;
  feed.weatherShow = false;
  feed.messageHide = false;
  feed.subscriptions = AppState.state.currentClient.feed;
  
  ClientsApi.getFeed(1, AppState.state.currentClient.client_id)
  .then(function(receivedFeed) {
    ClientsApi.getTickets('seattle-seahawks')
    .then(function(data) {
      feed.subscriptions.events = data.events;
    });
    
    feed.loading = false;
    AppState.state.currentClient.feed = receivedFeed;
    feed.subscriptions = receivedFeed;
    if (feed.subscriptions.weather) {
      feed.weatherShow = true;
    }

    //should input client_interest? or client_team || whatever you want
  });
});

