const mongoose = require('mongoose')
const RestaurantSchema = require('./restaurant')
const LocationSchema = require('./location')

const Restaurant = mongoose.model('Restaurant', RestaurantSchema)
const Location = mongoose.model('Location', LocationSchema)

module.exports = {
  Restaurant,
  Location
}