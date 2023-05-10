const Booking = require('../models/booking');

// Obtener todas las reservas
const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate('client').populate('tattoo_artist');
    res.status(200).json({ bookings });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener una reserva por su id
const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id).populate('client').populate('tattoo_artist');
    if (!booking) {
      return res.status(404).json({ message: 'Reserva no encontrada' });
    }
    res.status(200).json({ booking });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Crear una nueva reserva
const createBooking = async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json({ booking });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Actualizar una reserva existente
const updateBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!booking) {
      return res.status(404).json({ message: 'Reserva no encontrada' });
    }
    res.status(200).json({ booking });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar una reserva existente
const deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: 'Reserva no encontrada' });
    }
    res.status(200).json({ message: 'Reserva eliminada correctamente' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getAllBookings,
  getBookingById,
  createBooking,
  updateBooking,
  deleteBooking,
};
