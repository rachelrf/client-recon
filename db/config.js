//create connection here
var bluebird = require('bluebird');
var pgp = require('pg-promise')({promiseLib: bluebird});
var connectionString = process.env.DATABASE_URL||"postgres://localhost:5432/recon";

//create new db instance
var db = pgp(connectionString);
module.exports = db;

//to test locally you must create a database 'recon' in postgres
//lunchy start postgres
//postgresql icon > open psql
//create database recon;

//server will not crash

//\c recon (use recon db)
//\d (show tables)

//lunchy stop postgres

// 