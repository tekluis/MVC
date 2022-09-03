const express = require('express');
const app = express();
const rutas = require('./routes/rutas.js')
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use('/',rutas);

var puerto=3000;
app.listen(process.env.PORT || puerto, ()=>{
    console.log('Servidor funcionando en puerto '+puerto);
});


