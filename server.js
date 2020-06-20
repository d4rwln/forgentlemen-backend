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
app.listen(5000);
