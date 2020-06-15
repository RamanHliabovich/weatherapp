const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// const url = 'http://api.weatherstack.com/current?access_key=b880a26fecc8329b11c7e251c449037b&query=37.8267,-122.4233&units=f'

// request({url: url, json: true}, (error, response) => {
//     if (error) {
//         console.log('Unable to conncect to weather service')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees and it feels like ' + response.body.current.feelslike + ' degrees')
//     }
// })

// const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiaGxpYWJvcm4iLCJhIjoiY2tiY282czhlMDNweDJ4cGZ3ZGlpNzh2NSJ9.EEZZjGbgTLWaTXYsypUdzA&limit=1'

// request({url: url2, json: true}, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to the geo service')
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find city with current search input')
//     }   
//     else {
//         const latitude = response.body.features[0].center[1]
//         const longtitude = response.body.features[0].center[0]
//         console.log('Latitude = ' + latitude)
//         console.log('Longtitude = ' + longtitude)
//     }
// })

geocode('Cleveland', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})

forecast(-75.078, 44.1445, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})
