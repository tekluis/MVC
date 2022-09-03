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
};
 
module.exports = controladores
