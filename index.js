//index.js
var express = require('express');	//node js library imported
var app = express();

app.use(require('body-parser')());	//body parser, takes an input and stores it as javascript
app.use(require('method-override')());	//simulate put and delete method
app.use(require(__dirname + '/config/router')(express.Router()));

var server = app.listen(5000, function(){	//port 5000
	var host = server.address().address;
	var port = server.address().port;
	
	console.log('Example app listening at http://%s:%s', host, port);
});


