// importamos el orm
import { Sequelize } from "sequelize"; 
// instanciamos una conexion por medio de sequelize pasamos la base de datos el usuario el password asi como el motor de base y su host
const sequelize = new Sequelize('mysql://root:oDChYUsRMYaZwRHDzqWVOyPkamlPjGUK@roundhouse.proxy.rlwy.net:49157/railway')
// prueba de coneccion
try {
    // generamos la verificacion de la conexion
    await sequelize.authenticate();
    console.log('conectado exitosamente');
} catch (error) {
    console.log('Se genero un error al momento de crear la conexion')
}
export default sequelize;