const request = require('request')

const forecast = (longtitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b880a26fecc8329b11c7e251c449037b&query=' + latitude + ',' + longtitude + '&units=f'

    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to conncect to weather service', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees and it feels like ' + response.body.current.feelslike + ' degrees')
        }
    })

}

module.exports = forecast