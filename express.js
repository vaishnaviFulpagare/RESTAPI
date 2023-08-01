const express = require('express');
 const app = express()
 const mongoose = require('mongoose');
 const router=require("./route");
 const env=require("dotenv");
 env.config();



 app.use(express.json());
 app.use("/employee",router);


 mongoose.set('strictQuery', true);
 mongoose.connect(process.env.DB_connection)
    
    .then(()=>{
        console.log('connection created')
    })
    .catch((err)=>{
        console.log( `there will be some error ${err} `)
    })

 
 app.listen(6000)