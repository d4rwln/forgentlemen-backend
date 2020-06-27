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
        const scheduless = await Schedules.paginate({ client_id: req.params.client_id }, { page, limit: 10 });//repair
        return res.json(scheduless);
    },
    //Lista todos os schedules por barbershop
    async getItensOfBarbers(req, res) {
        const { page = 1 } = req.query;
        const scheduless = await Schedules.paginate({ barber_id: req.params.barber_id }, { page, limit: 10 });//repair
        return res.json(scheduless);
    },


    //Lista um schedule por id
    async getItem(req, res) {
        try {
            const schedule = await Schedules.findById(req.params.id);
            if (!schedule) return res.json({ sucess: false, msg:"Id não encontrado" });
            return res.json(schedule);
        } catch (err) {
            return res.json({ sucess: false});
        }
        
    },

    // Cria um novo schedule
    async createItem(req, res) {
        try {
            const schedule = await Schedules.create(req.body);
            if (!schedule) return res.json({ sucess: false });
            return res.json({ sucess: true });
        } catch{
            return res.json({ sucess: false });
        }
    },

    // Atualizar um schedule
    async updateItem(req, res) {
        try {
            const schedule = await Schedules.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!schedule) return res.json({ sucess: false, msg:"Id não encontrado" });
            return res.json(schedule);
        } catch (err) {
            return res.json({ sucess: false});
        }
    },
    
    //Remove um schedule
    async removeItem(req, res) {
        try {
            const schedule = await Schedules.findByIdAndRemove(req.params.id);
            if (!schedule) return res.json({ sucess: false, msg:"Id não encontrado" });
            return res.json({ sucess: true });
        } catch{
            return res.json({ sucess: false});
        }

    },
}