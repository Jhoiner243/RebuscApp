const express = require("express");
const router = express.Router(); // Declaración del objeto enrutador permite definir rutas y manejar
const conexion = require("../config/conexion"); // Importa la conexión

router.post("/login", function(req, res) {
    let cor = req.body.correo_usu;
    let pas = req.body.contra_usu;

    const consulta = "SELECT * FROM usuario WHERE correo_usu = ? AND contra_usu = ?";
    
    conexion.query(consulta, [cor, pas], function(error, results) {
        if (error) {
            console.error("Error al intentar acceder a la base de datos:", error);
            res.status(500).send("Error al intentar acceder a la base de datos");
        } else {
            if (results.length > 0) {
                console.log("Inicio de sesión exitoso");
                req.session.user = results[0];
                
                // Asegúrate de que id_cliente está en la sesión
                req.session.user.id_cliente = results[0].id_cliente;

                if (results[0].rol === 'trabajador') {
                    res.redirect("/dashboard_tra");
                } else {
                    res.redirect("/dashboard");
                }
            } else {
                console.log("Credenciales incorrectas");
                res.status(401).send("Correo o contraseña incorrectos");
            }
        }
    });
});


module.exports = router;
