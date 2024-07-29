const express = require('express');
const router = express.Router();
const connection = require('../config/conexion'); // Ajusta la ruta según tu estructura de archivos

router.get('/perfil_tra', (req, res) => {
  const query = 'SELECT cod_categoria, nombres_categoria FROM categoria';
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error al obtener categorías:', error);
      return res.status(500).send('Error al obtener categorías');
    }
    console.log('Categorías obtenidas:', results); // Para depuración
    res.render('perfil_tra', { categorias: results });
  });
});

module.exports = router;
