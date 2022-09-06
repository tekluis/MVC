const express = require('express')                                  // instala express
const router = express.Router();                                    // habilita ruteo
const controladores = require('../controllers/controladores')       // importa controladores

router.get('/', controladores.index);
router.get('/login', controladores.login);
router.get('/register', controladores.register);

router.post('/login', controladores.entrar);
router.post('/register', controladores.crear);


module.exports = router;