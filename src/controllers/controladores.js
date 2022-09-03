const path = require('path');

let controladores = {
    
    index: function(req,res) {
        res.sendFile(path.join(__dirname,'../views/index.html'));
    },
    
    login:  function(req,res) {
        res.sendFile(path.join(__dirname,'../views/login.html'));
    },
    
    register:  function(req,res) {
        res.sendFile(path.join(__dirname,'../views/register.html'));
    },
};
 
module.exports = controladores
