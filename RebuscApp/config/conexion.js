
let conectar = require("mysql"); //importo el modulo de mysql//


//parametros de conexion//
let conexion = conectar.createConnection({
    host: "mysql-jhoiner.alwaysdata.net",
    database: "jhoiner_rebuscapp",
    user: "jhoiner",
    password: "Alanna2345_"
});


conexion.connect(function(err){
    if(err){
        throw err;
} else{
    console.log("conexion exitosa");
}

});


module.exports = conexion; //exportamos el obj conexion//