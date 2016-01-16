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


module.exports = function(tumblrUrl, twitterUrl, instagramUrl, smCallback) {


  var tumblrUrl = (tumblrUsername || 'rachel6bilson') + '.tumblr.com';
  var twitterUrl = 'https://twitter.com/' + (twitterUsername || 'rachelbilson_6');
  var instagramUrl = 'https://www.instagram.com/' + (instagramUsername || 'rachel6bilson');


///////////////////////////////////////////////////////////////////

var result = [];
var tumblrUsername = 'rachel6bilson';
var twitterUsername = 'rachelbilson_6';
var instagramUsername = 'rachel6bilson';

async.parallel([
    function(callback) {
        console.log('IN TUMBLR')

        var blog = new tumblr.Blog('rachel6bilson' + '.tumblr.com', oauth);
        blog.posts({limit: 6}, function(error, response) {
          if (error) {
            throw new Error(error);
          }
         
          var posts = response.posts;
            posts.forEach(function(item) {
                if (item.type === 'photo') {

                  result.push({
                    source: 'tumblr',
                    type: 'photo',
                    text: 'Re-blogged: ' + item.summary,
                    imageUrl: 'http://i.imgur.com/RMUDK4n.png',
                    postUrl: item.post_url
                  });

                } else if (item.type === 'text') {
                  result.push({
                    source: 'tumblr',
                    type: 'text',
                    text: 'New post: ' + item.summary,
                    imageUrl: 'http://i.imgur.com/RMUDK4n.png',
                    postUrl: item.post_url
                  });
                }
            })


        console.log('CALLING BACK NOW')
        callback()

      if (error) {
        throw new Error(error);
      }

      var posts = response.posts;

      posts.forEach(function(item) {
        if (item.type === 'photo') {
    });


},

function(callback) {
    console.log('IN TWITTER')
    params = { screen_name: 'rachelbilson_6'}


  function(callback) {
    console.log('IN TWITTER');
    console.log('SCREENNAME', twitterUrl.slice(20) )
    params = { screen_name: twitterUrl.slice(20)};


    client.get('statuses/user_timeline', params, function(error, tweets, response){
        if (error) {
            return;
        } else  {
            tweets.forEach(function(item) {
              result.push({
                source: 'twitter',
                type: 'text',
                text: item.text,
                imageUrl: 'http://i.imgur.com/kRkImN3.png',
                postUrl: 'https://twitter.com/rachelbilson_6/status/' + item.id_str
              });
            });

            callback();
        }
    });
},

function(callback) {
    console.log('IN INSTAGRAM')
    var url = 'https://www.instagram.com/' + 'rachel6bilson';

    var request = require('request');
    var util = require('util');

    request.get(url, function(err, res, body) {
      var matches = body.match(/(window\._sharedData = )(.*)(;<\/script>)/);
      var instagramJsonString = matches[2];

      var data = JSON.parse(instagramJsonString);

      data.entry_data.ProfilePage[0].user.media.nodes.forEach(function(post) {
         result.push({
            source: 'instagram',
            type: 'photo',
            text: 'New Instagram post!',
            imageUrl: post.display_src,
            postUrl: 'https://www.instagram.com/p/' + post.code 
          });
      });
      
    callback();
    });

}; // final closing

], function() {console.log('ASYNC COMPLETE', result.length, result)});
}


