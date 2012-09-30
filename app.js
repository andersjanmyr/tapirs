
/**
 * Module dependencies.
 */

var express = require('express'),
    http = require('http'),
    path = require('path');

var corsMiddleware = function (req, res, next) {
  console.log("add to header called ... " + req.url);
  res.header('Access-Control-Allow-Origin', '*');
  next();
}

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.use(corsMiddleware);
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', function(req, res) {
    res.send('Tapirs Rule!');
});

require('./routes/facts')(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});


