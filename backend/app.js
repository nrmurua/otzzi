require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const artistRouter = require('./src/Router/artistRouter');
const appoinmentRoute = require('./src/Router/appointmentRoute');
const customerRoute = require('./src/Router/customerRoute');
const tattoRoute = require('./src/Router/tattoRouter');
const bookingRoute = require('./src/Router/bookingRouter');
const userRoute = require('./src/Router/userRoute');
const authRoutes = require('./src/Router/authRoutes');

const app = express();

module.exports = app;
const PORT = process.env.PORT || 5000;

/** S e t t i n g s
 * 
 */
app.set('port', PORT);

/** M i d d l e w a r e s
 * 
 */  
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use(cors());

/** R u t a s
 * 
 */
app.get('/', (req, res) => {
  res.send('Bienvenido a la API del centro de tatuajes');
});

/** R u t a s _ D e _ L a _ A p i
 * 
 */

app.use('/api', artistRouter);
app.use('/api', appoinmentRoute);
app.use('/api', customerRoute);
app.use('/api', tattoRoute);
app.use('/api', bookingRoute);
app.use('/api', userRoute);
app.use('/api', authRoutes);



  