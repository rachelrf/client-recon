var async = require('async');
var tumblr = require('tumblr');
var Twitter = require('twitter');
var tumblrOath = require('./tumblr-api-key.js');
var twitterClient = require('./twitter-api-key.js');



///////////////////////////////////////////////////////////////////


module.exports = function(tumblrUsername, twitterUsername, instagramUsername, smCallback) {
  var oauth = {
    consumer_key: tumblrOath.CONSUMER_KEY,
    consumer_secret: tumblrOath.CONSUMER_SECRET,
    token: tumblrOath.TOKEN,
    token_secret: tumblrOath.TOKEN_SECRET,
  };

  var client = new Twitter({
    consumer_key: twitterClient.CONSUMER_KEY,
    consumer_secret: twitterClient.CONSUMER_SECRET,
    access_token_key: twitterClient.TOKEN,
    access_token_secret: twitterClient.TOKEN_SECRET,
  });

  ////////////////////////////

  var results = [];

  // var tumblrUrl = tumblrUrl || 'http://rachel6bilson.tumblr.com/';
  // var twitterUrl = twitterUrl || 'https://twitter.com/rachelbilson_6/';
  // var instagramUrl = instagramUrl || 'https://www.instagram.com/rachel6bilson/';
  var tumblrUrl = (tumblrUsername || 'rachel6bilson') + '.tumblr.com';
  var twitterUrl = 'https://twitter.com/' + (twitterUsername || 'rachelbilson_6');
  var instagramUrl = 'https://www.instagram.com/' + (instagramUsername || 'rachel6bilson');

  ////////////////////////////

  function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  }

  async.parallel([
    function(callback) {
      console.log('IN TUMBLR');
      var blog = new tumblr.Blog(tumblrUrl, oauth);
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
            imageUrl: 'http://i.imgur.com/RMUDK4n.png',
            postUrl: item.post_url
          });

        } else if (item.type === 'text') {
          results.push({
            source: 'tumblr',
            type: 'text',
            text: 'New post: ' + item.summary,
            imageUrl: 'http://i.imgur.com/RMUDK4n.png',
            postUrl: item.post_url
          });
        }
      });
      callback();
    });
  },

  function(callback) {
    console.log('IN TWITTER');
    console.log('SCREENNAME', twitterUrl.slice(20) )
    params = { screen_name: twitterUrl.slice(20)};

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
            imageUrl: 'http://i.imgur.com/kRkImN3.png',
            postUrl: twitterUrl + 'status/' + item.id_str
          });
        });
        callback();
      }
    });
  },

  function(callback) { 
    console.log('IN INSTAGRAM')
    var url = instagramUrl;

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
            imageUrl: post.display_src,
            postUrl: 'https://www.instagram.com/p/' + post.code
          });
      });
      callback();
    });
  }], function() {
    console.log('ASYNC COMPLETE', results.length, results);
    smCallback(shuffle(results));
  });

<<<<<<< dc78ff17ccd7bb623f08bdafe433635b59ab441c
}; // final closing
=======
}; // final closing



  
>>>>>>> ionic styling posts
