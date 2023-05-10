const Artist = require('../models/artist');

// Obtener todos los artistas
const getArtists = async (req, res) => {
  try {
    const artists = await Artist.find();
    res.status(200).json({ artists });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener un artista por su id
const getArtistById = async (req, res) => {
  try {
    const artist = await Artist.findById(req.params.id);
    if (!artist) {
      return res.status(404).json({ message: 'Artista no encontrado' });
    }
    res.status(200).json({ artist });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Crear un nuevo artista
const createArtist = async (req, res) => {
  try {
    const artist = new Artist(req.body);
    await artist.save();
    res.status(201).json({ artist });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Actualizar un artista existente
const updateArtist = async (req, res) => {
  try {
    const artist = await Artist.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!artist) {
      return res.status(404).json({ message: 'Artista no encontrado' });
    }
    res.status(200).json({ artist });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar un artista existente
const deleteArtist = async (req, res) => {
  try {
    const artist = await Artist.findByIdAndDelete(req.params.id);
    if (!artist) {
      return res.status(404).json({ message: 'Artista no encontrado' });
    }
    res.status(200).json({ message: 'Artista eliminado correctamente' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getArtists,
  getArtistById,
  createArtist,
  updateArtist,
  deleteArtist,
};
