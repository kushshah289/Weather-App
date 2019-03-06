const request = require('request');

var geocodeAddress = (address, callback) => {
  var encodedAddress = encodeURIComponent(address);

  request({
    url: `http://maps.googleapis.com/maps/api/geocode/json?key=c40c98f8a7983478de182873b20a6596&address=${encodedAddress}`,
    json: true
  }, (error , response, body) => {
    if(error){
      callback('Unable to connect to Google Servers.');
    } else if (body.status === 'ZERO_RESULTS') {
      callback('Unable to find the address.');
    } else if (body.status === 'OK'){
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
      }
  });
}

module.exports = {
  geocodeAddress
}



//
