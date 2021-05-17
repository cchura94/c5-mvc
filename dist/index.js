"use strict";

var _express = _interopRequireDefault(require("express"));

var _index = _interopRequireDefault(require("./routes/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import modulos locales
console.log("hola Mundo");
const app = (0, _express.default)(); // rutas

(0, _index.default)(app); // habilitar vistas

app.set('views', './src/views');
app.set('view engine', 'ejs');
/*
app.get("/", function(req, res){
    res.render("index");
});*/

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log(`Servidor Levantado en http://127.0.0.1:${PORT}`);
});