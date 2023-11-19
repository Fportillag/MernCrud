const express = require('express');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const routes = require('./routes/empleado');
const app = express();
const cors = require('cors');

app.use(express.urlencoded({
    extended:true
}));

//CONFIGURACION CONEXION A LA BASE DE DATOS

app.use(myConnection(mysql,({
    host:'localhost',
    user:'root',
    password:'Mantis321',
    database:'node',
    port: 3306
})));

app.use(cors());

app.use(express.json());

app.use('/',routes);



app.listen(3001,()=>{
    console.log("Server is running on port 3001");
})