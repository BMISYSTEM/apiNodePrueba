// se importa el paquete express
import express from 'express';
import bodyParser from 'body-parser';
import { PORT , HOST} from '../Config/ports.js';
// importamos la conexion a base de datos
// import sequelize from './Config/db.js';
// inicializamos todos los modelos 
// import { User,Productos } from './Model/index.js'; 
// instanciamos express
const app = express();

app.use(bodyParser.urlencoded({extends:true}));
app.use(bodyParser.json());
// se define el endpoint
app.get('/holamundo',(req,res)=>{
    res.send('hola mundo desde node desplegado en raiwalli')
});
app.get('/',(req,res)=>{
    res.send('aplicacion desplegada')
});
// configuramos el metodo de escuchar por un puerto determinado mandamos el mensaje de fecha y hora de ejecucion del servidor
app.listen(PORT,HOST,()=>{
    console.log('Servidor ejecutandose en el puerto  . '+ PORT + ' en el host =' + HOST)
})