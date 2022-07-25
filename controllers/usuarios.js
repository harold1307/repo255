const { response, request } = require('express');
const Usuario = require('../models/usuarios');
const bcryptjs = require('bcryptjs');

const usuariosGet = (req = request, res = response) =>{
    //const query = req.query;
    res.status(200).json({
        ok:true,
        query,
        msj: 'API Rest get'
    })
}


const usuariosPost = async (req = request, res = response) =>{
    //const body = req.body
    const {nombre, correo, password, rol} = req.body;
    const usuario = new Usuario({nombre, correo, password, rol});
    // Verificar si el correo existe
   
    const salt = bcryptjs.genSaltSync(10);
    usuario.password = bcryptjs.hashSync(password, salt);
    
    //Guardar en DB
    await usuario.save();
   
    res.status(200).json({
        ok:true,
        usuario,
        msj: 'API Rest post'
    })
}

const usuariosPut = (req = request, res = response) =>{
    const { id }= req.params
    res.status(200).json({
        ok:true,
       id,
        msj: 'API Rest put'
    })
}

const usuariosDelete = (req = request, res = response) =>{
    res.status(200).json({
        ok:true,
        msj: 'API Rest Delete'
    })
}

const usuariosPatch = (req = request, res = response) =>{
    res.status(200).json({
        ok:true,
        msj: 'API Rest Patch'
    })
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}