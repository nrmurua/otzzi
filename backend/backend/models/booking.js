const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  customerName: { type: String, required: true },
  tattooArtist: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
}, {
  timestamps: true,
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
