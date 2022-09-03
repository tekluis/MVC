const express = require('express')
const router = express.Router();
const controladores = require('../controllers/controladores')

router.get('/', controladores.index);
router.get('/login', controladores.login);
router.get('/register', controladores.register);
router.post('/', controladores.index);

module.exports = router;
