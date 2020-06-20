const express = require('express');
const routes = express.Router();
const ClientController = require ('./controllers/ClientController');

routes.get('/', (req,res)=>{ res.send('Servidor rodando...')});
routes.get('/clients', ClientController.getItens);
routes.get('/clients/:id', ClientController.getItem);
routes.post('/clients', ClientController.createItem);
routes.put('/clients/:id', ClientController.updateItem);
routes.delete('/clients/:id', ClientController.removeItem);
 




module.exports = routes;