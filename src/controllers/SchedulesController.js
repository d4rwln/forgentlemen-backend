const mongoose = require('mongoose');

const Schedules = mongoose.model('Schedules');

module.exports = {
    //Lista todos os schedules
    async getItens(req, res) {
        const { page = 1 } = req.query;
        const scheduless = await Schedules.paginate({}, { page, limit: 10 });
        return res.json(scheduless);
    },
    //Lista todos os scheduleses por client
    async getItensOfClients(req, res) {
        const { page = 1 } = req.query;
        const scheduless = await Schedules.paginate({}, { page, limit: 10 });//repair
        return res.json(scheduless);
    },
    //Lista todos os schedules por barbershop
    async getItensOfBarbers(req, res) {
        const { page = 1 } = req.query;
        const scheduless = await Schedules.finpaginate({}, { page, limit: 10 });//repair
        return res.json(scheduless);
    },


    //Lista um schedulese por id
    async getItem(req, res) {
        const schedules = await Schedules.findById(req.params.id);
        return res.json(schedules);
    },

    // Cria um novo schedulese
    async createItem(req, res) {
        await Schedules.create(req.body);
        return res.json({ sucess: true });
    },

    // Atualizar um schedulese
    async updateItem(req, res) {
        const schedules = await Schedules.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(schedules);
    },

    //Remove um schedulese
    async removeItem(req, res) {
        await Schedules.findByIdAndRemove(req.params.id);
        return res.json({ sucess: true });
    },
}