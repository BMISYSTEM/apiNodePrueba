// se importa el paquete express
import express from 'express';
// importamos la conexion a base de datos
import sequelize from './Config/db.js';
// inicializamos todos los modelos 
import { User,Productos } from './Model/index.js'; 
// instanciamos express
const app = express();
app.use(bodyParse.urlencoded({extends:true}));
app.use(bodyParse.json());
// definicion de puerto 
const port = 3000;
// se define el endpoint
app.get('/holamundo',(req,res)=>{
    res.send('hola mundo desde node desplegado en raiwalli')
});
app.get('/',(req,res)=>{
    res.send('aplicacion desplegada')
});
// configuramos el metodo de escuchar por un puerto determinado mandamos el mensaje de fecha y hora de ejecucion del servidor
app.listen(port,()=>{
    console.log('Servidor ejecutandose '+ new Date())
})