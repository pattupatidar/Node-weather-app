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
        apparentTemperature: body.currently.apparentTemperature,
        humidity: body.currently.humidity,
        pressure: body.currently.pressure,
        windSpeed: body.currently.windSpeed,
        visibility: body.currently.visibility,
        summary: body.hourly.summary,
        icon: body.currently.icon
      });
    }
  });
};
module.exports.getWeather = getWeather;
