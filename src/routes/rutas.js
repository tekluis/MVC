const express = require('express')
const router = express.Router();
const controladores = require('../controllers/controladores')

router.get('/', controladores.index);
router.get('/login', controladores.login);
router.get('/register', controladores.register);

router.post('/login', controladores.entrar);
router.post('/register', controladores.crear);


module.exports = router;