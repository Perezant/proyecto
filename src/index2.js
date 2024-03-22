const express = require("express");
const mysql = require("mysql");
const app = express();

let conexion = mysql.createConnection({
   host: "localhost",
   database: "contacto",
   user: "root",
   password: ""
});

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.get("/", function(req, res){
   res.render("Contact");
});

app.post("/validar",function(req,res){
   const datos = req.body;
   let nom = datos.nombre;
   let ema = datos.email;
   let tel = datos.telefono;
   let des = datos.descripcion;

   let registrar = "INSERT INTO formu (nombre,email,telefono,descripcion) VALUES ('"+nom+"','"+ema+"','"+tel+"','"+des+"')";
   conexion.query(registrar,function(error){
      if(error){
         throw error;
      }else{
         console.log("Datos Almacenados Correctamente");

      }
   });
});

const PORT = 4000;
const MAX_PORT_ATTEMPTS = 10; // Número máximo de intentos para encontrar un puerto disponible
let portAttempts = 0;

function startServer(port) {
   app.listen(port, function(err) {
      if (err) {
         console.error("Error al intentar iniciar el servidor en el puerto " + port + ": " + err.message);
         if (portAttempts < MAX_PORT_ATTEMPTS) {
            portAttempts++;
            startServer(PORT + portAttempts); // Intenta con el siguiente puerto
         } else {
            console.error("No se pudo iniciar el servidor en ningún puerto disponible.");
         }
      } else {
         console.log("Servidor Creado http://localhost:" + port);
      }
   });
}

startServer(PORT); // Inicia el servidor en el puerto especificado inicialmente
