let controladores = {
    
    index: function(req,res) {
        res.sendFile('/Users/luis/Desktop/MVC/src/views/index.html')
    },
    
    login:  function(req,res) {
        res.sendFile('/Users/luis/Desktop/MVC/src/views/login.html')
    },
    
    register:  function(req,res) {
        res.sendFile('/Users/luis/Desktop/MVC/src/views/register.html')
    },
};
 
module.exports = controladores
