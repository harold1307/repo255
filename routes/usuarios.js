const { Router }= require('express');
const { check } = require('express-validator');
const router = Router();

const { 
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete

}= require('../controllers/usuarios');

router.get('/',  usuariosGet  ); 
router.put('/:id',  usuariosPut ); 
router.post('/',[
    check('nombre').not().isEmpty(),
    check('password').isLength({ min: 6 }),
    check('correo').isEmail(),

], usuariosPost );
router.patch('/', usuariosPatch);     
router.delete('/', usuariosDelete) ;

module.exports = router;