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
      }
    });
}
});
