const express = require('express');
const app = express();
const rutas = require('./routes/rutas.js')
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/',rutas);

app.use((req,res,next) => {
    res.status(404).render((__dirname + '/views/no_encontrado.ejs'));
})

var puerto=3000;
app.listen(process.env.PORT || puerto, ()=>{
    console.log('Servidor funcionando en puerto '+puerto);
});


