'use strict';

var controller = require('../controllers');
var helpers = require('../helpers');

module.exports = function(app, express) {
	// ROUTE FOR DISPLAYING DASHBOARD
	app.get('/api/users/:user_id/clients', function (req,res) {
		controller.dashboard.get(req,res);
	});





/* =============== FRIEND ROUTES ============= */
	// ROUTE FOR CREATING A NEW FRIEND
	app.post('/api/users/:friend_id/clients', function (req,res) {
		 controller.friend.post(res, req.body, req.params.friend_id);
	});

	// ROUTE FOR DISPLAYING PARTICULAR FRIEND
	app.get('/api/users/:user_id/clients/:friend_id', function (req,res) {
		//controller.client.get(req,res);
		controller.friend.get(res, req.params.friend_id, req.params.user_id);
	});

	// ROUTE FOR UPDATING A PARTICULAR FRIENDS'S INFORMATION
	app.put('/api/users/:user_id/clients/:friend_id', function (req, res) {
		controller.friend.put(res, req.body, req.params.friend_id, req.params.user_id);
	});


/* ================ USER ROUTES ================= */
	// ROUTE FOR CREATING A NEW USER
	app.post('/api/createUser', function (req, res) {
		controller.user.post(res, req.body.username);
	});

  // ROUTE FOR UPDATING A CLIENT
	//app.put('/api/users/:user_id/clients/:client_id', controller.client.put);

	// ROUTE FOR GETTING FEED FOR A PARTICULAR CLIENT
	app.get('/api/users/:user_id/clients/:client_id/feed', function(req,res){
		// SOMEHOW GET THE CLIENT RECORD FROM CLIENT DATABASE
		// LOOK AT THE COLUMNS IN THE CLIENT RECORD, CREATE A PARAMS OBJECT BASED ON THAT
		// SEND THAT TO CONTROLLER.FEED.GET
		// PARAMS OBJ: {'client_company':'Togos', 'client_zipcode':'94303'}
		//controller.feed.getOneClient(req,res);
	})
};