const express = require('express');
const router = express.Router();

router.get('/indexdos', (req, res) => {
    res.render('indexdos'); 
});

module.exports = router;
