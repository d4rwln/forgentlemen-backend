const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');


//Iniciando o App
const app = express();
app.use(express.json());

//Iniciando o DB
require ("./connect");
requireDir ("./src/models");
// --------------------------------------------



app.use('/api', require("./src/routes"));


app.use((req,res,next)=>{
    const error = new Error("Not Found");
    error.status = 404;
    next (error);
});

app.use((error, req,res,next)=>{
    res.status(error.status || 500);
    res.json({Error:error.message});
});

app.listen(5000);
