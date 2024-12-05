import axios from 'axios';

export const geocode = (address, callback) => {
    const geo_url = `https://api.mapbox.com/search/geocode/v6/forward?q=${encodeURIComponent(address)}&access_token=_`

    axios.get(geo_url, { timeout: 10000 })
        .then(response => {
            const targetData = response.data.features[0]
            const { properties: { coordinates: { longitude, latitude }}} = targetData
            // OR >>> const { geometry: { coordinates: [longitude, latitude] } } = targetData;

            callback(undefined, {longitude:longitude, latitude:latitude})
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
