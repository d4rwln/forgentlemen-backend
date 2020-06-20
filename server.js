const express = require('express');

const app = express();

app.get('/',(req,res) =>{
     res.send('Olá Darwin!');
});

app.listen(5000);
