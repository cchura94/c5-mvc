import express from "express";
// import modulos locales
import rutas from "./routes/index";
console.log("hola Mundo")
const app = express();

// rutas
rutas(app);

// habilitar vistas
app.set('views', './src/views'); // definir la ubicacion de nuestra vistas
app.set('view engine','ejs'); // conf de motor de plantillas (pug, ejs, hbs)

/*
app.get("/", function(req, res){
    res.render("index");
});*/

const PORT = process.env.PORT || 3000

app.listen(PORT, function(){
    console.log(`Servidor Levantado en http://127.0.0.1:${PORT}`)
});