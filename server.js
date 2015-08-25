'use strict';

var express = require('express');
var app = express();
var routes = require('./routes');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var cors = require('cors');


var port = 8080;

mongoose.connect('mongodb://localhost:27017/KV');

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended : true
}));
app.use(cors());
app.use(express.static(__dirname+'/public'));

routes.app(app);



app.listen(port, function(){
	console.log('now listening on port ' + port);
});