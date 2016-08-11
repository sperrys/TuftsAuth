var express        = require('express');
var app            = express();
var tuftsauth 	   = require('./tuftsauth');
var path 		   = require('path');
var bodyParser     = require('body-parser');

app.use(bodyParser.json());         
app.use(bodyParser.urlencoded({ extended: true }));     

var port = process.env.PORT || 8000; 

app.get('/', function(req, res) {
	 res.sendFile(path.join(__dirname + '/public/login.html'));
});


app.post('/', function(req, res) {
	
	password = req.body.password;
	username = req.body.username;
	
	tuftsauth(username, password);
	
});

app.listen(port);