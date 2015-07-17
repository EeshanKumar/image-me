var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var port = process.env.PORT || 3000;

var piglatinify = require("./lib/piglatinify.js");
var songMe = require("./lib/songMe.js");
var jokeMe = require("./lib/jokeMe.js");
var pizzaMe = require("./lib/pizzaMe.js");
var makePizza = require("./lib/makePizza.js");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/app/"));

app.get("/", function(req, res) {
  res.sendFile("index.html");
});

app.get("/song", function(req, res) {
  var mySong = songMe();
  res.send(mySong);
});

app.get("/joke", function(req, res) {
	var myJoke = jokeMe();
  res.json(myJoke);
});

app.get("/pizza", function(req, res) {
  var myPizza = pizzaMe();
  res.json(myPizza);
});

app.post("/makePizza", function(req, res) {
  var imgSrc;
  var pizzaString = makePizza.convertToPizzaString(req.body.crust,
    req.body.cheese, req.body.toppings);

  //Get pizza image from google
  imgSrc = makePizza.search(pizzaString, res, function(res, response) {
    //Return your pizza via json
    res.json(response);
  });
});

app.post("/piglatin", function(req, res) {
  var firstname = piglatinify(req.body.firstname);
  var lastname = piglatinify(req.body.lastname);
  var piglatined = { firstname: firstname, lastname: lastname };
  res.json(piglatined);
});

app.listen(port, function() {
  console.log("server started on port " + port);
});
