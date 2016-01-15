var async = require('async');
var tumblr = require('tumblr');
var Twitter = require('twitter');
var tumblrOath = require('./tumblr-api-key.js');
var twitterClient = require('./twitter-api-key.js');

///////////////////////////////////////////////////////////////////


Module.exports = function(username, smCallback) {
  var oauth = {
    consumer_key: tumblrOath.CONSUMER_KEY,
    consumer_secret: tumblrOath.CONSUMER_SECRET,
    token: tumblrOath.TOKEN,
    token_secret: tumblrOath.TOKEN_SECRET,
  };

  var client = new Twitter({
    consumer_key: twitterClient.CONSUMER_KEY,
    consumer_secret: twitterClient.CONSUMER_SECRET,
    token: twitterClient.TOKEN,
    token_secret: twitterClient.TOKEN_SECRET,
  });

  ////////////////////////////

  var results = [];

  var tumblrUsername = usernames.tumblr || 'rachel6bilson';
  var twitterUsername = usernames.twitter || 'rachelbilson_6';
  var instagramUsername = usernames.instagram || 'rachel6bilson';

  ////////////////////////////

  function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  }

  async.parallel([
    function(callback) {
      console.log('IN TUMBLR');
      var blog = new tumblr.Blog(tumblrUsername + '.tumblr.com', oauth);
      blog.posts({limit: 6}, function(error, response) {

      if (error) {
        throw new Error(error);
      }

      var posts = response.posts;
      posts.forEach(function(item) {
        if (item.type === 'photo') {

          results.push({
            source: 'tumblr',
            type: 'photo',
            text: 'Re-blogged: ' + item.summary,
            imageUrl: 'http://i.imgur.com/RMUDK4n.png'
          });

        } else if (item.type === 'text') {
          results.push({
            source: 'tumblr',
            type: 'text',
            text: 'New post: ' + item.summary,
            imageUrl: 'http://i.imgur.com/RMUDK4n.png'
          });
        }
      });
      callback();
    });
  },

  function(callback) {
    console.log('IN TWITTER');
    params = { screen_name: twitterUsername};

    client.get('statuses/user_timeline', params, function(error, tweets, response){
      if (error) {
        console.log('Error getting friend tweets', error);
        return;
      } else  {
        tweets.forEach(function(item) {
          results.push({
            source: 'twitter',
            type: 'text',
            text: 'Just tweeted: ' + item.text,
            imageUrl: 'http://i.imgur.com/kRkImN3.png'
          });
        });
        callback();
      }
    });
  },

  function(callback) {
    console.log('IN INSTAGRAM')
    var url = 'https://www.instagram.com/' + instagramUsername;

    var request = require('request');
    var util = require('util');

    request.get(url, function(err, res, body) {
      var matches = body.match(/(window\._sharedData = )(.*)(;<\/script>)/);
      var instagramJsonString = matches[2];

      var data = JSON.parse(instagramJsonString);

      data.entry_data.ProfilePage[0].user.media.nodes.forEach(function(post) {
         results.push({
            source: 'instagram',
            type: 'photo',
            text: 'New Instagram post!',
            imageUrl: post.display_src
          });
      });
      callback();
    });
  }], function() {
    console.log('ASYNC COMPLETE', results.length, results);
    smCallback(results);
  });

}; // final closing
  