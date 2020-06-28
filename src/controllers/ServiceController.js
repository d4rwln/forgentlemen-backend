const mongoose = require('mongoose');
const { getItensOfBarbers } = require('./SchedulesController');

const Service = mongoose.model('Service');

module.exports = {
    //Lista todos os Servicees
    async getItens(req, res) {
        try {

            //Inicializando paginação
            const { page = 1 } = req.query;
            const services = await Service.paginate({}, { page, limit: 10 });
            return res.json(services);
        } catch {
            return res.json({ sucess: false });
        }
    },


    //Lista todos por id do barber
    async getItensOfBarbers(req, res) {
        try {
            //Inicializando paginação
            const { page = 1 } = req.query;
            const services = await Service.paginate({ barber_id: req.params.barber_id }, { page, limit: 10 });
            return res.json(services);
        } catch {
            return res.json({ sucess: false });
        }
    },


    //Lista um Servicee por id
    async getItem(req, res) {
        try {
            const service = await Service.findById(req.params.id);
            return res.json(service);
        } catch {
            return res.json({ sucess: false });
        }
    },

    // Cria um novo Servicee
    async createItem(req, res) {
        try {
            await Service.create(req.body);
            return res.json({ sucess: true });
        } catch {
            return res.json({ sucess: false });
        }
    },

    // Atualizar um Servicee
    async updateItem(req, res) {
        try {
            const service = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
            return res.json(service);
        } catch {
            return res.json({ sucess: false });
        }
    },

    //Remove um Servicee
    async removeItem(req, res) {
        try {
            await Service.findByIdAndRemove(req.params.id);
            return res.json({ sucess: true });
        } catch {
            return res.json({ sucess: false });
        }
    },
}