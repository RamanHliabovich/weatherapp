const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const location = process.argv[2]

if (!location) {
    return console.log('No location argument provide')
} else {
    geocode(location, (error, data) => {
        if (error) {
            return console.log(error)
        }
        forecast(data.latitude, data.longtitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            console.log(data.location)
            console.log(forecastData)
        })    
    })
}


