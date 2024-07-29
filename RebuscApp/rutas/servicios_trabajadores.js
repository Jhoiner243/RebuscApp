const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const connection = require('../config/conexion'); // Ajusta la ruta según tu estructura de archivos

// Configuración de multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Carpeta donde se guardarán las imágenes
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Ruta para la carga de imágenes y agregar ocupación con categoría
router.post('/perfil_tra', upload.single('imagen'), (req, res) => {
    const { cod_categoria } = req.body;
    const id_cliente = req.session.user.id_cliente; // Asegúrate de que id_cliente esté presente
    const imagen = req.file ? req.file.filename : null;

    const query = 'UPDATE usuario SET cod_categoria = ? WHERE id_cliente = ? AND rol = "trabajador"';
    connection.query(query, [cod_categoria, id_cliente], (error, results) => {
        if (error) {
            console.error('Error al actualizar la categoría del trabajador:', error);
            return res.status(500).send('Error al actualizar la categoría del trabajador');
        }
        res.redirect('/perfil_tra'); // Redirige después de la actualización
    });
});

// Otras rutas aquí...
module.exports = router;
