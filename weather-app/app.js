const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=b880a26fecc8329b11c7e251c449037b&query=37.8267,-122.4233'

request({url: url, json: true}, (error, response) => {
    console.log(response.body.current)
})

