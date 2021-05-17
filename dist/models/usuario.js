"use strict";

const seq = require("./../config/database");

const {
  Sequelize,
  DataTypes
} = require('sequelize');

const usuario = seq.define('Usuario', {
  //atributos
  correo: DataTypes.STRING,
  clave: DataTypes.STRING
}, {
  timestamps: true
}); //console.log(usuario === sequelize.models.Usuario)

module.exports = usuario;