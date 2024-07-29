const express = require("express");
const router = express.Router();

router.get("/dashboard", function(req, res) {
    if (req.session.user) {
        res.render("dashboard", { nombreUsuario: req.session.user.nombres_usu });
    } else {
        res.redirect("/login");
    }
});

router.get("/dashboard_tra", function(req, res) {
    if (req.session.user) {
        res.render("dashboard_tra", { nombreUsuario: req.session.user.nombres_usu });
    } else {
        res.redirect("/login");
    }
});

module.exports = router;
