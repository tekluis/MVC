const express = require('express');                 // carga biblioteca express
const app = express();                              // inicializa express
const rutas = require('./routes/rutas.js');         // inicializa ruteo
app.use(express.static('public'));                  // declara carpeta publica

app.set('view engine', 'ejs');                      //inicializa ejs
app.use(express.urlencoded({ extended: false }));   //permite capturar datos enviados por el formulario con req.body
app.use(express.json());                            //permite capturar datos enviados por el formulario en req.body

app.use('/',rutas);                                 // define ruteo

app.use((req,res,next) => {
    res.status(404).render((__dirname + '/views/no_encontrado.ejs'));       // captura error 404
})

var puerto=3000;
app.listen(process.env.PORT || puerto, ()=>{
    console.log('Servidor funcionando en puerto '+puerto);                  // inicia servidor en puerto
});



