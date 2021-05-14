const seq = require("./../config/database");
const { Sequelize, DataTypes } = require('sequelize');

const producto = seq.define('Producto', {
    //atributos
    nombre: DataTypes.STRING,
    cantidad: DataTypes.STRING

},{
  timestamps: true  
});


//console.log(usuario === sequelize.models.Usuario)
module.exports = producto