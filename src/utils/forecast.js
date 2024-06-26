const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=819b76a30412e7ebb64fad32c0d54b8f&query=' + latitude + ',' + longitude + '&units=m'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,
                body.current.weather_descriptions[0] + ', it is currently ' + body.current.temperature + ' degress out. It feels like ' + body.current.feelslike + ' degress out.'
                )
        }
    })
}

module.exports = forecast