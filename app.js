require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estatico
// Tiene prioridad sobre las rutas
app.use(express.static('public'))

// Controlador
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Angel Carrasco',
        titulo: 'Curso de Node'
    });
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Angel Carrasco',
        titulo: 'Curso de Node'
    });
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Angel Carrasco',
        titulo: 'Curso de Node'
    });
})

// app.get('/generic', (req, res) => {
//     res.sendFile(__dirname + '/public/generic.html')
// })

// app.get('/elements', (req, res) => {
//     res.sendFile(__dirname + '/public/elements.html')
// })


// Comodin
app.get('*', (req, res) => {
    res.send('No se encuentra esta ruta')
})

app.listen(port, () => {
    console.log(`Ejemplo corriendo en http://localhost:${port}`)
})