require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const artistRouter = require('./Router/artistRouter');
const appoinmentRoute = require('./Router/appointmentRoute');
const customerRoute = require('./Router/customerRoute');
const tattoRoute = require('./Router/tattoRouter');
const bookingRoute = require('./Router/bookingRouter');
const userRoute = require('./Router/userRoute');
const authRoutes = require('./Router/authRoutes');





const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;
const JWT_SECRET = process.env.JWT_SECRET;

// Conexión a la base de datos
(async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB database!');
  } catch (error) {
    console.error(error);
  }
})();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use(
  cors({
    origin: ["http:localhost:3000", "https://otzzi.onrender.com"]
  })
  );

// Rutas
app.get('/', (req, res) => {
  res.send('Bienvenido a la API del centro de tatuajes');
});

//Rutas de la api

app.use('/api', artistRouter);
app.use('/api', appoinmentRoute);
app.use('/api', customerRoute);
app.use('/api', tattoRoute);
app.use('/api', bookingRoute);
app.use('/api', userRoute);
app.use('/api', authRoutes);





// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
