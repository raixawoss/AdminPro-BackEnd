const express= require('express');
require('dotenv').config();
const cors=require('cors');
const { dbConnection }= require('./databse/config')
const app=express();

//base de datos
dbConnection();
console.log(process.env)
app.get('/',(req,res)=>{
//configurar cors

app.use(cors());

res.json({
    ok:true,
    meg:'hola mundo'
})

});


app.listen(process.env.PORT,()=>{
    console.log('Servidor Corriendo :'+process.env.PORT)
})