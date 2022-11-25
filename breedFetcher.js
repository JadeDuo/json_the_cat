const request = require('request');
let args = process.argv.slice(2);
const breedSearchURL = "https://api.thecatapi.com/v1/breeds/search?q=";

request(breedSearchURL + args[0], (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("oh dear, we don't know that kitty. Please try another!");
    return;
  }
  console.log(data[0].description);
});

