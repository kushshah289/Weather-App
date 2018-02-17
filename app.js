// const yargs = require('yargs');
// const geocode = require('./geocode/geocode');
// const argv = yargs
//   .options({
//     a: {
//       demand: true,
//       alias: 'address',
//       describe: 'Address to fetch weather for',
//       string: true
//     }
//   })
//   .help()
//   .alias('help', 'h')
//   .argv;
//
// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if(errorMessage){
//     console.log(errorMessage);
//   } else {
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// });


const request = require('request');
request({
  url: 'https://api.forecast.io/forecast/c40c98f8a7983478de182873b20a6596/37.8267,-122.4233',
  json: true
}, (error, response, body) => {
  if(error){
    console.log('Unable to connect to forest.io servers');
  } else if (response.statusCode === 400) {
    console.log('Unable ot fetch weather.');
  } else if (response.statusCode === 200){

  }
  console.log(body.currently.temperature);
});
