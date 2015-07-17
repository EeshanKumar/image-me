//Code simplified and used from node module 'google-images'
//https://github.com/vdemedes/node-google-images

var request = require("request");

module.exports = {
  //Convert pizza ingredients into a string
  convertToPizzaString: function(crust, cheese, toppings) {
    var pizzaString = crust + " pizza ";
    pizzaString += "with " + cheese + " cheese ";
    pizzaString += "and " + toppings;
    return pizzaString;
  },
  //Search for an image via google
  search: function(query, originalRes, callback) {
    //Use request module to get img
    request("http://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=" + (query.replace(/\s/g, "+")) + "&start=0",
      function(err, res, body) {
        //Assume no errors (I know, bad code, but I'm tired...)
        //Create array of returned images
        var images, item, items, _i, _len;
        items = JSON.parse(body).responseData.results;
        images = [];
        for (_i = 0, _len = items.length; _i < _len; _i++) {
          item = items[_i];
          images.push({
            width: item.width,
            height: item.height,
            unescapedUrl: item.unescapedUrl,
            url: item.url
          });
        }

        //Random Index Array function
        function randomIndexValue(array) {
          return array[Math.floor(Math.random() * array.length)];
        }

        //Grab random image source from images array
        var imgSrc = randomIndexValue(images).unescapedUrl;

        //Create response for website
        var yourPizza = { pizzaString: query, img: imgSrc };

        //Call callback function with original res and your response
        //ps - I got lost in the scope of this and couldn't understand
        //the request module. That is why I had to push the originalRes
        //variable all the way from the initial call.
        //So if there was a much easier way to do this, I'm all ears
        callback(originalRes, yourPizza);
      }
    );
  }
};
