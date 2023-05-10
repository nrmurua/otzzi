const mongoose = require('mongoose');

const tattooSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  size: String,
  style: {
    type: String,
    enum: ['Traditional', 'Realism', 'Watercolor', 'New School', 'Neo-Traditional']
  },
  price: {
    type: Number,
    min: 0
  },
  image: {
    type: String,
    required: true
  },
  description: String,
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Artist'
  }
});

module.exports = mongoose.model('Tattoo', tattooSchema);
