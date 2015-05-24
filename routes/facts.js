"use strict";

var Fact = require('../models/fact.js');

var routes = function(app) {
  app.get('/facts', function(req, res) {
    res.send(Fact.find(req.query.search));
  });

  app.post('/facts', function(req, res) {
    var id = Fact.create(req.body.fact);
    res.send(201, '' + id);
  });

  app.get('/facts/:id', function(req, res) {
    var id = req.params.id;
    var fact = (id === 'random') ? Fact.random() : Fact.get(id);
    if (fact)
      res.send(fact);
    else
      res.send(404, 'Resource not found, id: ' + id);
  });

  app.put('/facts/:id', function(req, res) {
    var id = req.params.id;
    console.log(id, req.body);
    var fact = Fact.update(id, req.body.fact);
    res.send(fact);
  });

  app.delete('/facts/:id', function(req, res) {
    var id = req.params.id;
    var fact = Fact.del(id);
    res.send(fact);
  });

};

module.exports = routes;


