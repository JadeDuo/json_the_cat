const request = require('request');

const breedSearchURL = "https://api.thecatapi.com/v1/breeds/search?q=";

const fetchBreedDescription = function(breedName, callback) {

  request(breedSearchURL + breedName, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback("Sorry, we don't know that cat breed, try another?", null);
    } else {
      callback(null, data[0].description);
    }
  });
};

module.exports = fetchBreedDescription;
