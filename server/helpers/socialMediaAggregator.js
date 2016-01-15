var async = require('async');
var tumblr = require('tumblr');
var Twitter = require('twitter');

///////////////////////////////////////////////////////////////////

var oauth = {
  consumer_key: 'HlmUVzWsHv6gLk6uaQDNJkqvBVI4rSAPHG9zSZewSFaYXOvGLk',
  consumer_secret: 'pFg655KZYDD0LiM4EZT86ozLkkvOGQlam254rEcXljGvIs3s1s',
  token: '3L2yEKqu88siO5MHbrQX6f7IEkNbWXNmINcyxozSscjTSXisTM',
  token_secret: '1B5itegH3XJAhh25dt6OGNFKyqgQ9d55P78TEt7X9RhJizrXid',
};

var client = new Twitter({
  consumer_key: 'Xc18yVQaxT1i4Lr1Fj27brSJA',
  consumer_secret: 'lVX5gffhqZi5gu5uyv0sxZn2vcSCPyzkntAivzkOMpHzdZuSwS',
  access_token_key: '4756641446-MgRUR3nPJLThnwC63N9Gnb48UIuewqZvcyPt7aq',
  access_token_secret: 'Q3zRDdsdybKU07gnhKz93yZq7NRjU76qrGIq1DOp8AWx6'
});

///////////////////////////////////////////////////////////////////

var result = [];
var tumblrUsername = 'rachel6bilson';
var twitterUsername = 'rachelbilson_6';
var instagramUsername = 'rachel6bilson';

function shuffle(o){
  for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
}

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
                    imageUrl: 'http://i.imgur.com/RMUDK4n.png'
                  });

                } else if (item.type === 'text') {
                  result.push({
                    source: 'tumblr',
                    type: 'text',
                    text: 'New post: ' + item.summary,
                    imageUrl: 'http://i.imgur.com/RMUDK4n.png'
                  });
                }
            })

        console.log('CALLING BACK NOW')
        callback()

    });

},

function(callback) {
    console.log('IN TWITTER')
    params = { screen_name: 'rachelbilson_6'}

     
    // request data 

    client.get('statuses/user_timeline', params, function(error, tweets, response){
        if (error) {
            return;
        } else  {
            tweets.forEach(function(item) {
              result.push({
                source: 'twitter',
                type: 'text',
                text: item.text,
                imageUrl: 'http://i.imgur.com/kRkImN3.png'
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
            imageUrl: post.display_src
          });
      });
      
    callback();
    });

}

], function() {console.log('ASYNC COMPLETE', result.length, result)});
