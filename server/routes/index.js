'use strict';

var controller = require('../controllers');
var helpers = require('../helpers');

module.exports = function(app, express, passport) {
/* =============== LOGIN & AUTHENTICATION ================ */
	// THIS ROUTE WILL REDIRECT THE USER TO GOOGLE'S LOGIN PAGE
	app.get('/login', passport.authenticate('google', 
		{ scope: ['https://www.googleapis.com/auth/userinfo.profile']}),
		function (req, res){});

	// AFTER SUBMITTING THEIR CREDENTIALS, GOOGLE WILL REDIRECT THE USER TO '/login-verify'. IF THE LOGIN
	// WAS SUCCESSFUL, THE USER WILL THEN BE REDIRECTED TO THE URL SPECIFIED BY 'successRedirect'. IF NOT, THEY
	// WILL BE REDIRECTED TO THE URL SPECIFIED BY 'failureRedirect'.
	app.get('/login-verify', passport.authenticate('google', 
		{
			successRedirect: 'http://localhost:3000/home',
			failureRedirect: '/'
		}));

	// THIS IS JUNK I CONJURED UP FOR THE SAKE OF FIXING THE ERROR
	app.get('/api/loginfo', function (req, res) {
		console.log(req.session.passport.user);
		res.redirect('/home');
	})

/* ================ USER ROUTES ================= */
	app.post('/api/users', function (req, res) {
		controller.user.addOne(req.body.arr, res);
	});

	app.get('/api/users/:userId', function (req, res) {
		controller.user.getOne(req.params.userId, res);
	});

/* =============== FRIEND ROUTES ========================= */
	app.post('/api/users/:userId/friends', function (req, res) {
		 controller.friend.addOne(req.params.userId, req.body, res);
	});

	app.get('/api/users/:userId/friends', function (req, res) {
		controller.friend.getAll(req.params.userId, res);
	});

	app.get('/api/friends/:friendId', function (req, res) {
		controller.friend.getOne(req.params.friendId, res);
	});

	app.put('/api/friends/:friendId', function (req, res) {
		controller.friend.updateOne(req.params.friendId, req.body, res);
	});

	app.delete('/api/friends/:friendId', function (req, res) {
		controller.friend.deleteOne(req.params.friendId, req.body, res);
	});	

	app.get('/api/friends/:friendId/posts', function(req, res) {
		controller.friend.getPosts(req.params.friendId, res);
	});

	app.get('/api/friends/:friendId/gifts', function(req, res) {
		controller.friend.getGifts(req.params.friendId, res);
	});
	
/* ============= AUTHENTICATION HELPER ============= */
	function ensureAuthenticated(req, res, next) {
	  if (req.isAuthenticated()) { return next(); }
	  res.redirect('/login');
	};
};
