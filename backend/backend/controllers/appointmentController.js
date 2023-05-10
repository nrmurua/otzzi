const Appointment = require('../models/appointment');

// Controlador para crear una nueva cita
exports.createAppointment = async (req, res) => {
  try {
    const appointment = new Appointment({
      artistId: req.body.artistId,
      customerId: req.body.customerId,
      tattooId: req.body.tattooId,
      date: req.body.date,
      startTime: req.body.startTime,
      endTime: req.body.endTime
    });

    const savedAppointment = await appointment.save();
    res.status(201).json(savedAppointment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controlador para obtener todas las citas
exports.getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().populate('artistId customerId tattooId');
    res.status(200).json(appointments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controlador para obtener una cita por ID
exports.getAppointmentById = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id).populate('artistId customerId tattooId');
    if (!appointment) {
      res.status(404).json({ error: 'Appointment not found' });
      return;
    }
    res.status(200).json(appointment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controlador para actualizar una cita existente
exports.updateAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) {
      res.status(404).json({ error: 'Appointment not found' });
      return;
    }

    appointment.artistId = req.body.artistId || appointment.artistId;
    appointment.customerId = req.body.customerId || appointment.customerId;
    appointment.tattooId = req.body.tattooId || appointment.tattooId;
    appointment.date = req.body.date || appointment.date;
    appointment.startTime = req.body.startTime || appointment.startTime;
    appointment.endTime = req.body.endTime || appointment.endTime;
    appointment.isConfirmed = req.body.isConfirmed || appointment.isConfirmed;

    const updatedAppointment = await appointment.save();
    res.status(200).json(updatedAppointment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controlador para eliminar una cita existente
exports.deleteAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndRemove(req.params.id);
    if (!appointment) {
      res.status(404).json({ error: 'Appointment not found' });
      return;
    }
    res.status(200).json({ message: 'Appointment deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
