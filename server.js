const express = require('express');
const mongoose = require('mongoose');

//Iniciando o App
const app = express();

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/db_gentlemen',{ useNewUrlParser: true});

//Rotas
app.get('/',(req,res) =>{
     res.send('Olá Darwin!');
});

app.listen(5000);
