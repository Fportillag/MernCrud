const express = require('express');
const router = express.Router();
const empleadoController = require('../controllers/empleadoController')

router.post('/create',empleadoController.create);
router.get('/empleados', empleadoController.listar);
router.put('/editar/:id', empleadoController.editar);
router.delete('/eliminar/:id', empleadoController.eliminar);
module.exports = router;