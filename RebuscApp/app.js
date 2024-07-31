// Librerías importadas
const express = require("express");
const app = express();
const session = require("express-session");
const conexion = require("./config/conexion"); // Asegúrate de importar la conexión
const routes = require('./rutas');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Manejo de sesiones
app.use(session({
    secret: 'tu_secreto_aqui',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } 
}));

// Rutas de páginas dinámicas y estáticas
app.use(express.static("public"));
app.use(require("./rutas/index"));
app.use(require("./rutas/login"));
app.use(require("./rutas/solicitudes_servicio"));
app.use(require("./rutas/destroy"));
app.use(require("./rutas/perfil"));
app.use(require("./rutas/indexdos"));
app.use(require("./rutas/servicios_trabajadores"));
app.use(require("./rutas/servicios"));
app.use(require("./rutas/registrousuario"));

app.get('/registrousuario', (req, res) => {
    res.render('registrousuario');
});

const logoutRouter = require("./rutas/destroy");
app.use("/", logoutRouter);

app.get('/index', (req, res) => {
    res.render('index');
});

app.get('/indexdos', (req, res) => {
    res.render('indexdos');
});

// Ruta para obtener y mostrar el dashboard con las categorías
app.get('/dashboard', (req, res) => {
    if (req.session.user) {
        const queryCategorias = 'SELECT cod_categoria, nombres_categoria FROM categoria';
        conexion.query(queryCategorias, (err, categorias) => {
            if (err) {
                console.error("Error al obtener categorías:", err);
                return res.status(500).send("Error al obtener categorías");
            }
            res.render('dashboard', { nombreUsuario: req.session.user.nombres_usu, categorias: categorias });
        });
    } else {
        res.redirect("/login");
    }
});

app.get('/solicitudes', (req, res) => {
    if (req.session.user) {
        const queryCategorias = 'SELECT cod_categoria, nombres_categoria FROM categoria';
        conexion.query(queryCategorias, (err, categorias) => {
            if (err) {
                console.error("Error al obtener categorías:", err);
                return res.status(500).send("Error al obtener categorías");
            }
            res.render('solicitudes', { nombreUsuario: req.session.user.nombres_usu, categorias: categorias });
        });
    } else {
        res.redirect("/login");
    }
});

app.get('/perfil_tra', (req, res) => {
    if (req.session.user) {
        const userId = req.session.user.id; // Obtener el ID del usuario de la sesión

        // Consulta para obtener categorías
        const queryCategorias = 'SELECT nombres_categoria FROM categoria';

        // Consulta para obtener el id_cliente
        const queryIdCliente = 'SELECT id_cliente FROM usuario WHERE id = ?';

        // Realizar ambas consultas
        conexion.query(queryCategorias, (errCategorias, categorias) => {
            if (errCategorias) {
                console.error("Error al obtener categorías:", errCategorias);
                return res.status(500).send("Error al obtener categorías");
            }

            conexion.query(queryIdCliente, [userId], (errIdCliente, resultsIdCliente) => {
                if (errIdCliente) {
                    console.error("Error al obtener id_cliente:", errIdCliente);
                    return res.status(500).send("Error al obtener id_cliente");
                }

                if (resultsIdCliente.length > 0) {
                    const id_cliente = resultsIdCliente[0].id_cliente; // Obtener id_cliente del resultado

                    // Renderizar la vista con categorías e id_cliente
                    res.render('perfil_tra', { 
                        categorias: categorias,
                        id_cliente: id_cliente
                    });
                } else {
                    console.error("No se encontró id_cliente para el usuario");
                    return res.status(404).send("No se encontró id_cliente para el usuario");
                }
            });
        });
    } else {
        res.redirect("/login");
    }
});


// Ruta de dashboard para trabajadores
app.get("/dashboard_tra", (req, res) => {
    if (req.session.user) {
        res.render("dashboard_tra", { nombreUsuario: req.session.user.nombres_usu });
    } else {
        res.redirect("/login");
    }
});

// Ruta para registrar el servicio
app.post('/api/registrar_servicio', function (req, res) {
    const { nombre, descripcion, categoria } = req.body;
    const codTrabajador = req.session.user.id_cliente; // Asegúrate de que el trabajador esté autenticado

    const queryRegistrarServicio = 'INSERT INTO servicios (nombres_servicio, descripcion, cod_categoria, cod_trabajador) VALUES (?, ?, ?, ?)';
    conexion.query(queryRegistrarServicio, [nombre, descripcion, categoria, codTrabajador], function (err, result) {
        if (err) {
            console.error('Error al registrar el servicio:', err);
            return res.status(500).send('Error al registrar el servicio');
        }
        res.json({ success: true, message: 'Servicio registrado correctamente' });
    });
});

app.get('/solicitudes/:categoria', async (req, res) => {
    const { categoria } = req.params;

    try {
        const results = await new Promise((resolve, reject) => {
            conexion.query(
                `SELECT correo_usu FROM usuario 
                 WHERE cod_categoria = ? 
                 AND rol = 'trabajador'`,
                [categoria],
                (error, results) => {
                    if (error) reject(error);
                    else resolve(results);
                }
            );
        });

        console.log('Resultado de la consulta:', results);

        if (!Array.isArray(results)) {
            throw new Error('El resultado de la consulta no es un array');
        }

        const emails = results.map(row => row.correo_usu);

        console.log('Correos electrónicos encontrados:', emails);

        res.status(200).json({ emails });
    } catch (error) {
        console.error('Error al obtener correos:', error);
        res.status(500).json({
            message: 'Error al obtener correos',
            error: error.message
        });
    }
});

// Inicio del servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, function () {
    if (PORT === 4000) {
        console.log("http://localhost:4000");
    } else {
        console.log(PORT);
    }
});
