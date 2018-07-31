const yargs = require('yargs');
const weather = require('./weather');
const geocode = require('./geocode');
const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

geocode.geocodeAddress(argv.a,(errorMessage,results) => {
  if(errorMessage)
  {
    console.log(errorMessage);
  } else {
    console.log(results.address);
    weather.getWeather(results.Latitude,results.Longitude,(errorMessage,weatherResults) =>{
      if(errorMessage)
      {
        console.log(errorMessage);
      }else {
        console.log(`It's results ${results.temperature} but it feels like ${results.apparentTemperature}`);
        console.log(`Humidity: ${results.humidity}`);
        console.log(`WindSpeed: ${results.windSpeed}`);
        console.log(`visibility: ${results.visibility}`);
        console.log(`summary: ${results.summary}`);
        console.log(`icon: ${results.icon}`);
      }
    });
}
});
