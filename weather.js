const request = require('request');
var getWeather = (Latitude,Longitude,callback) => {
  request({
    url: 'https://api.darksky.net/forecast/6b7da165dce0a7462558787db88dda80/${Latitude},${Longitude}',
    json: true
  },(error,response,body) => {
    if(error)
    {
      callback("Unable to connect with the server");
    } else if (response.statusCode == 400) {
      callback("Unable to fetch weather");
    } else if (response.statusCode == 200){
      callback(undefined,{
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }
  });
};
module.exports.getWeather = getWeather;
