const Tattoo = require('../models/tatto');

// Obtener todos los tatuajes
const getTattoos = async (req, res) => {
  try {
    const tattoos = await Tattoo.find();
    res.status(200).json({ tattoos });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener un tatuaje por su id
const getTattooById = async (req, res) => {
  try {
    const tattoo = await Tattoo.findById(req.params.id);
    if (!tattoo) {
      return res.status(404).json({ message: 'Tatuaje no encontrado' });
    }
    res.status(200).json({ tattoo });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Crear un nuevo tatuaje
const createTattoo = async (req, res) => {
  try {
    const tattoo = new Tattoo(req.body);
    await tattoo.save();
    res.status(201).json({ tattoo });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Actualizar un tatuaje existente
const updateTattoo = async (req, res) => {
  try {
    const tattoo = await Tattoo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!tattoo) {
      return res.status(404).json({ message: 'Tatuaje no encontrado' });
    }
    res.status(200).json({ tattoo });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar un tatuaje existente
const deleteTattoo = async (req, res) => {
  try {
    const tattoo = await Tattoo.findByIdAndDelete(req.params.id);
    if (!tattoo) {
      return res.status(404).json({ message: 'Tatuaje no encontrado' });
    }
    res.status(200).json({ message: 'Tatuaje eliminado correctamente' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getTattoos,
  getTattooById,
  createTattoo,
  updateTattoo,
  deleteTattoo,
};
