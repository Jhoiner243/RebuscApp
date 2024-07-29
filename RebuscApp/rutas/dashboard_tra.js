const express = require('express');
const router = express.Router();

router.get('/dashboard_tra', (req, res) => {
    res.render('dashboard_tra'); 
});

module.exports = router;