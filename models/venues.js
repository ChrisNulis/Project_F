const mongoose = require('mongoose');
const Schema = mongoose.Schema

const venuesSchema = new mongoose.Schema ({
  img: {type: String, required: false},
  name: {type: String, required: false},
  location: {type: String, required: false},
  description: {type: String, required: false},
})

const Venues = mongoose.model('Venues', venuesSchema);

module.exports = Venues
