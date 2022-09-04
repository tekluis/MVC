const path = require('path');

let controladores = {
    
    index: function(req,res) {
        res.render(path.join(__dirname,'../views/index.ejs'));
    },
    
    login:  function(req,res) {
        res.render(path.join(__dirname,'../views/login.ejs'));
    },
    
    register:  function(req,res) {
        res.render(path.join(__dirname,'../views/register.ejs'));
    },

    crear: function(req,res) {
        let datos_crear=req.body;
        //res.send(datos_crear);
        res.redirect('/');
    },

    entrar: function(req,res) {
        let datos_entrar=req.body;
        //res.send(datos_entrar);
        res.redirect('/');
    },
};
 
module.exports = controladores
