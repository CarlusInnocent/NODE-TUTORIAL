import { geocode } from './utils/geocode.js';
import { weatherData } from './utils/weatherData.js';

const location = process.argv[2]

if (location === undefined){
    console.log(`Provide correct location`)
    process.exit(1)
}

geocode(location, (error, data) => {
    if(error){
        return console.log(`Error at geo-step: ${error}`)
    }

    weatherData(data.latitude, data.longitude, (error, wData) => {
        if (error){
            return console.log(`Error at weather-step: ${error}`)
        }
        
        console.log(`LOCATION DATA\nSearched Location: ${location}\nLogitude: ${data.longitude}\nLatitude: ${data.latitude}`)
        console.log(`\n\nFETCHED WEATHER DATA`)
        console.log(wData)
        
        })
    
})
