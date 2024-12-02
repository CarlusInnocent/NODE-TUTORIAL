import axios from 'axios';

export const weatherData = (latitude, longitude, callback) => {
    const weather_url = `http://api.weatherstack.com/current?access_key=cbfe5d8b3810f958ace873608df5695e&query=${latitude},${longitude}&units=m`

    axios.get(weather_url, { timeout: 10000 })
        .then(response => {
            //console.log(response.data.current)
            const { data: { current: { temperature, feelslike, weather_descriptions } } } = response
            callback(undefined, `${weather_descriptions[0]}: Its ${temperature} degrees out there.\nThough it might feel ${feelslike} degrees due to other factors.`)
        })
        .catch(error => {
            if (error.code === 'ETIMEDOUT') {
                callback('Request timed out. Please check your connection or try again later.', undefined)
            } else if (error.response) {
                callback(`API Error: ${error.response.data.error.info}`, undefined)
            } else if (error.request) {
                callback('No response received from the server.', undefined)
            } else {
                callback(`Error: ${error.message}`, undefined)
            }
        })
}