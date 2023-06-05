
//  Importamos el framework de Express y lo guardamos en un objeto
const express = require('express');
const cors = require('cors');
const app = express();

module.exports = app;

/** S e t t i n g s
 * 
 */
app.set('port', process.env.PORT || 4000);

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

app.use('/api/usuarios', require('./Router/userRoute.js') );
app.use('/api/usuarios', require('./Router/customerRoute.js') );

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


