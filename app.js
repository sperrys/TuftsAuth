var express        = require('express');
var app            = express();
var tuftsauth 	   = require('tuftsauth');


app.get('/', function(req, res) {
	res.send();
	
});


app.post('/', function(req, res) {
	password = req.body.password;
	username = req.body.username;
	
	tuftsauth(username, password);
	
});