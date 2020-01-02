const express = require('express');
const bodyParser = require('body-parser');
const router = require('./network/routes');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// app.use(router);
router(app);


// router.delete('/message', function (req, res) {
//   console.log('req.query ', req.query);
//   console.log('req.body ', req.body);
//   res.send('Mensaje "' + req.body.text + '" eliminado');
// });

// app.use('/', function (req, res) {
//   res.send('Hola');
// });

app.use('/app', express.static('public'));

// Lighterway
// app.use('/', function (req, res) {
//   res.send('Hola');
// });

const port = 3000;
app.listen(port);
console.log('La aplicación esta escuchando en http://localhost:' + port);
