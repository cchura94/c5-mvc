const basedatos = require("./../config/database");
const { DataTypes } = require("sequelize");

// definir el model Categoria
const categoria = basedatos.define("Categoria", {
    nombre: {
        type: DataTypes.STRING(30),
        allowNull: false,
        validate: {
            notEmpty: {msg: "El campo nombre no deberia estar vacio"}
        }
    },
    detalle: {
        type: DataTypes.TEXT,
        allowNull: true
    }
})

// definir el model Producto
const producto = basedatos.define("Producto", {
    nombre: {
        type: DataTypes.STRING(200),
        allowNull: false,
        validate: {
            notEmpty: {msg: "El campo nombre no deberia estar vacio"}
        }
    },
    cantidad: DataTypes.INTEGER,
    precio: DataTypes.DECIMAL(10, 2),
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: true
    }
});

// relacion 1:N
categoria.hasMany(producto, {foreignKey: 'categoria_id'});

module.exports = {
    categoria,
    producto
}