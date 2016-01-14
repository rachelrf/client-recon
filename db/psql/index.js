'use strict';

var sqlLoad = require('sql-load');
var path = require('path');
/**
 * This is a directory of all the SQL strings that are used by the database.
 * To add a Query, create a sql file in the `psql/` directory and then require it
 * in the module.exports object of this file.
 * @type {Object}
 */
module.exports = {
  getUserById: sqlLoad(path.join(__dirname, './getUserById.sql'))
  insertUser: sqlLoad(path.join(__dirname, './insertUser.sql')),
  getOneFriend: sqlLoad(path.join(__dirname, './get-one-client')),
  getAllFriends: sqlLoad(path.join(__dirname, './get-all-clients')),
  editOneFriend: sqlLoad(path.join(__dirname, './edit-one-client')),
  insertFriend: sqlLoad(path.join(__dirname, './insertClient.sql')),
  insertFriendUsers: sqlLoad(path.join(__dirname, './insertClientSales.sql'))
};

