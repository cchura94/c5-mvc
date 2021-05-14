const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('c5-mvc', 'postgres', 'postgresql', {
    host: 'localhost',
    dialect: 'postgres' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});


function pruebaConexion() {
    sequelize.authenticate().then(res => {
            console.log('Conexion Correcta con la BD.');
    }).catch(error => {
        console.log('Error de Conexion:', error);
    });       
}


async function pruebaConexion2() {
    try {
        await sequelize.authenticate();
        console.log('Conexion Correcta con la BD.');
      } catch (error) {
        console.log('Error de Conexion:', error);
      }
}

pruebaConexion();
pruebaConexion2();

module.exports = sequelize