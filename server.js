'use strict';

var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var port = process.env.PORT || 3000;

var imageMe = require('./lib/imageMe.js');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/app/'));

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.post('/imageMe', function(req, res) {
  //Get random image from google
  imageMe.search(req.body.imageTxt, res, function(res, response) {
    //Return image source via json
    res.json(response);
  });
});

app.listen(port, function() {
  console.log('server started on port ' + port);
});
