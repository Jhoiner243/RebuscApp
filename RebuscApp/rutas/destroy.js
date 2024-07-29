const express = require("express");
const router = express.Router();

router.post("/logout", function(req, res) {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send("Error al cerrar la sesión");
        }
        res.clearCookie("connect.sid"); // Limpia la cookie de la sesión
        res.redirect("/index"); // Redirige a la página de inicio de sesión u otra página deseada
    });
});

module.exports = router;
