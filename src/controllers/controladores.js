const path = require('path');                                           // habilita path

let controladores = {
    
    index: function(req,res) {
        res.render(path.join(__dirname,'../views/index.ejs'));          // devuelve la página index.ejs al llamar a controlador.index
    },
    
    login:  function(req,res) {
        res.render(path.join(__dirname,'../views/login.ejs'));          // devuelve la página login.ejs al llamar a controlador.login
    },
    
    register:  function(req,res) {
        res.render(path.join(__dirname,'../views/register.ejs'));
    },

    crear: function(req,res) {
        let datos_crear=req.body;                                       // carga los datos del formulario en datos_crear desde req.body
        //res.send(datos_crear);                                        // muestra los datos del formulario en el navegador
        res.redirect('/');                                              // envía a la página de home luego de cargar los datos del formulario
    },

    entrar: function(req,res) {
        let datos_entrar=req.body;
        //res.send(datos_entrar);
        res.redirect('/');
    },
};
 
module.exports = controladores                                          // exporta controladores
