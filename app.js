"use strict";

var
    bodyParser = require('body-parser'),
    errorHandler = require('errorhandler'),
    express = require('express'),
    favicon = require('serve-favicon'),
    http = require('http'),
    methodOverride = require('method-override'),
    morgan = require('morgan'),
    path = require('path'),
    Fact = require('./models/fact.js');

var corsMiddleware = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
};

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.use(corsMiddleware);
app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/favicon.ico'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(methodOverride());

if (process.env.NODE_ENV === 'development')
  app.use(errorHandler());

app.get('/', function(req, res) {
  res.render('index', {facts: Fact.find()});
});

app.get('/status', function(req, res) {
  res.send('Tapirs Rule!');
});

app.options('*', function(req, res) {
  res.send('CORS for the win!');
});

require('./routes/facts')(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});


