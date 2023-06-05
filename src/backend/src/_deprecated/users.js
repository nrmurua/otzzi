// Aqui iran las rutas que interactuaran con el Frontend
// Se definiran las operaciones a traves de las URL que le daremos al servidor
// Por ej, agregaremos una URL para agregar algo, editarlo, eliminarlo, etc

const { Router } = require('express');  //  funcion
const router = Router();            //  Objeto al cual podemos asignar rutas

const Task = require('../models/task');    // Almacenamos este modelo para hacer consultas a la BD a traves de el

router.route('/')
        .get( (req, res) => res.send('Rutas de usuario') )
        .post()
        .put()
        .delete()
        .patch();

router.get( '/', async (req, res) => {
    /*Task.find({})
        .then(tasks => console.log(tasks))
        .catch(err => console.error(err));*/
    // Usamos async await pq se demoran en responder
    const tasks = await Task.find();
    console.log( tasks );
    res.json( tasks );

    //res.send('Hola Mundo!');
    /*res.json({
        status: "Pero que gran economia!"
    });*/
} );

router.get( '/:id', async (req, res) => {
    const tarea = await Task.findById( req.params.id );
    res.json( tarea );
} );

router.post( '/', async (req, res) => {
    //console.log( req.body );                // Gracias a express.json
    /** En postman o un buscador, obtenemos de respuesta el mensaje Json, pero
     * Si nos fijamos en la consola, obtenemos el dato que el cliente tiro por post
     * Ahora simplemente debemos almacenarlo */
    const {nombre, apellido, description} = req.body;
    // Como tenemos el dato, ahora podemos crear un nuevo task (modelo)
    const task1 = new Task ({
        nombre,
        apellido,
        description
    });
    console.log( task1 );
    // Fijense que la tarea tira el objeto y un object id, y eso se usara para guardarlo en la BD
    await task1.save(); // Esto toma un poco de tiempo, por lo tanto, usemos await
    res.json( {
        status: "Tarea guardada"
    } );

} );

router.put( '/:id', async (req, res) => {
    // De estos datos creare una nueva tarea
    const { title, description } = req.body;
    const newTask = {title, description};
    console.log( req.params.id );
    await Task.findByIdAndUpdate( req.params.id, newTask );  // Funcion interna
    res.json( {
        status: "Tarea actualizada!"
    } );
} )

router.delete( '/:id', async (req, res) => {
    await Task.findByIdAndRemove( req.params.id );  // Funcion interna
    res.json( {
        status: "Tarea eliminada!"
    } );
} );

module.exports = router;