const request = require('request');

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.forecast.io/forecast/c40c98f8a7983478de182873b20a6596/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if(error){
      callback('Unable to connect to forest.io servers');
    } else if (response.statusCode === 400) {
      callback('Unable ot fetch weather.');
    } else if (response.statusCode === 200){
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }

  });
};

module.exports.getWeather = getWeather;
