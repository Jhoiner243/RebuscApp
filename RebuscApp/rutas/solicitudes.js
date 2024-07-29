const express = require('express');
const router = express.Router();

router.get('/solicitudes', (req, res) => {
    res.render('solicitudes'); 
});

module.exports = router;