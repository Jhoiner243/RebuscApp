const express = require('express');
const router = express.Router();
const connection = require('../config/conexion'); // Ajusta la ruta según tu estructura de archivos

router.get('/perfil_tra', (req, res) => {
  const query = 'SELECT cod_categoria FROM usuario';
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error al obtener categorías:', error);
      return res.status(500).send('Error al obtener categorías');
    }
    console.log('Categorías obtenidas:', results); // Para depuración
    
    const nombreUsuario = req.session.nombreUsuario || 'Usuario'; // 'Usuario' es un valor por defecto

    res.render('dashboard', { 
      categorias: results,
      nombreUsuario: nombreUsuario // Pasamos el nombre de usuario a la vista
    });
  });
});

// Nueva ruta para obtener ocupaciones por categoría
router.get('/ocupaciones/:cod_categoria', (req, res) => {
  const cod_categoria = req.params.cod_categoria;
  const query = 'SELECT codigo_ocu, nombres_ocu, imagen FROM ocupacion WHERE Cod_categoria1 = ?';
  connection.query(query, [cod_categoria], (error, results) => {
    if (error) {
      console.error('Error al obtener ocupaciones:', error);
      return res.status(500).send('Error al obtener ocupaciones');
    }
    res.json(results);
  });
});

module.exports = router;
