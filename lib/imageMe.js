//Code simplified and used from node module 'google-images'
//https://github.com/vdemedes/node-google-images

var request = require("request");

module.exports = function(query, callback) {
  //Use request module to get img
  request("http://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=" + (query.replace(/\s/g, "+")) + "&start=0",
    function(err, res, body) {
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
      var returnObj = { imageTxt: query, img: imgSrc };

      callback(returnObj);
    }
  );
};
