const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: String,
  address: String,
  isCustomer: {
    type: Boolean,
    default: false,
  },
  isArtist: {
    type: Boolean,
    default: false,
  },
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
  },
  artistId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Artist',
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
