//librerias importadas

const express = require("express");
const router = express.Router(); //declaracion del objeto enrutador permite definir rutas y manejar 
const conexion = require("../config/conexion"); //importa la conexion


router.post("/registrousuario", function(req,res){
   
    
let ced = req.body.cedula;
let nom = req.body.nombre;
let ape = req.body.apellido;
let sex = req.body.sexo;
let te = req.body.telefono;
let cor = req.body.correo;
let pas = req.body.password;
let dep = req.body.departamento;
let ro = req.body.rol;





const insertar = "INSERT INTO usuario (id_cliente, nombres_usu, apellidos_usu , sexo_usu, telefono_usu, correo_usu, contra_usu, departamento, rol) VALUES ('"+ced+"','"+nom+"', '"+ape+"','"+sex+"','"+te+"', '"+cor+"','"+pas+"', '"+dep+"', '"+ro+"')";


conexion.query(insertar, function(error, row){
    
    if(error){
        throw error;
        console.log("Error al intentar agregar los datos a la base de datos");
    }else{
        
        console.log("Datos guardados");

       //mensaje = "Registro exitoso, puede iniciar sesión";
         res.redirect("index");
    }
});


});

module.exports = router;