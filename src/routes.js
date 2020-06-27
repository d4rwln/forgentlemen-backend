const express = require('express');
const routes = express.Router();
const ClientController = require ('./controllers/ClientController');
const BarberShopController = require ('./controllers/BarberShopController');
const ServiceController = require ('./controllers/ServiceController');
const SchedulesController = require ('./controllers/SchedulesController');

routes.get('/', (req,res)=>{ res.send('Servidor rodando...')});

// rotas de clientes
routes.get('/clients', ClientController.getItens);
routes.get('/clients/:id', ClientController.getItem);
routes.post('/clients', ClientController.createItem);
routes.put('/clients/:id', ClientController.updateItem);
routes.delete('/clients/:id', ClientController.removeItem);
 
// rotas de barbers
routes.get('/barbers', BarberShopController.getItens);
routes.get('/barbers/:id', BarberShopController.getItem);
routes.post('/barbers', BarberShopController.createItem);
routes.put('/barbers/:id', BarberShopController.updateItem);
routes.delete('/barbers/:id', BarberShopController.removeItem);

// rotas dos serviços
routes.get('/services', ServiceController.getItens);
routes.get('/services/:id', ServiceController.getItem);
routes.post('/services', ServiceController.createItem);
routes.put('/services/:id', ServiceController.updateItem);
routes.delete('/services/:id', ServiceController.removeItem);

// rotas dos agendamentos
routes.get('/schedules', SchedulesController.getItens);
routes.get('/schedulesOfClients', SchedulesController.getItensOfClients);
routes.get('/schedulesOfBarbers', SchedulesController.getItensOfBarbers);
routes.get('/schedules/:id', SchedulesController.getItem);
routes.post('/schedules', SchedulesController.createItem);
routes.put('/schedules/:id', SchedulesController.updateItem);
routes.delete('/schedules/:id', SchedulesController.removeItem);




module.exports = routes;