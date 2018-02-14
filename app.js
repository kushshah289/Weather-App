const request = require('request');

request({
  url: "http://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20%20street%20philadelphia",
  json: true
}, (error , response, body) => {
  console.log(JSON.stringify(body, undefined, 2));
});
