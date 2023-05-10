const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  style: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  profilePictureUrl: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  availableDates: [{
    date: {
      type: Date,
      required: true,
    },
    slots: [{
      time: {
        type: String,
        required: true,
      },
      reserved: {
        type: Boolean,
        default: false,
      },
    }],
  }],
});

const Artist = mongoose.model('Artist', artistSchema);

module.exports = Artist;
