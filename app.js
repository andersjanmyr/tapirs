"use strict";

var express = require('express'),
    http = require('http'),
    path = require('path'),
    Fact = require('./models/fact.js');

var corsMiddleware = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
};

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('view engine', 'ejs');
  app.use(corsMiddleware);
  app.use(express.static(__dirname + '/public'));
  app.use(express.favicon(__dirname + '/favicon.ico'));
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', function(req, res) {
    res.render('index', {facts: Fact.find()});
});

app.options('*', function(req, res) {
    res.send('CORS for the win!');
});

require('./routes/facts')(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});


