const mongoose = require('mongoose');

const Client = mongoose.model('Client');

module.exports = {
    //Lista todos os clientes
    async getItens(req, res) {
        //Inicializando paginação
        try {
            const { page = 1 } = req.query;
            const clients = await Client.paginate({}, { page, limit: 10 });
            return res.json(clients);
        } catch {
            return res.json({ sucess: false });
        }
    },

    //Lista um cliente por id
    async getItem(req, res) {
        try {
            const client = await Client.findById(req.params.id);
            return res.json(client);
        } catch {
            return res.json({ sucess: false });
        }

    },

    // Cria um novo cliente
    async createItem(req, res) {
        try {
            await Client.create(req.body)
            return res.json({ sucess: true });
        } catch{
            return res.status(404).send ({ sucess: false });
        }
    },

    // Atualizar um cliente
    async updateItem(req, res) {
        try {

            const client = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });
            return res.json(client);
        } catch {
            return res.json({ sucess: false });
        }
    },

    //Remove um cliente
    async removeItem(req, res) {
        try {

            await Client.findByIdAndRemove(req.params.id);
            return res.json({ sucess: true });
        } catch {
            return res.json({ sucess: false });
        }

    },
}