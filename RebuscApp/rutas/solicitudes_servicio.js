const express = require('express');
const router = express.Router();
const conexion = require('../config/conexion'); // Asegúrate de importar la conexión

router.post('/servicios', (req, res) => {
    const { categoria, descripcion, monto } = req.body;

    const queryInsert = 'INSERT INTO solicitudes_servicio (cod_categoria, descripcion, monto) VALUES (?, ?, ?)';
    const values = [categoria, descripcion, monto];

    conexion.query(queryInsert, values, (err, result) => {
        if (err) {
            console.error("Error al insertar solicitud de servicio:", err);
            return res.status(500).send("Error al registrar la solicitud de servicio");
        }
        
        console.log("Solicitud de servicio registrada:", result);
        res.redirect('/dashboard'); // Redirige de nuevo al dashboard después de enviar el formulario
    });
});

module.exports = router;
