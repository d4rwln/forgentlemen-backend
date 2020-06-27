const mongoose = require('mongoose');

const Client = mongoose.model('Client');

module.exports = {
    //Lista todos os clientes
    async getItens(req, res) {
        // const clients = await Client.find();
        //Inicializando paginação
        const { page = 1 } = req.query;
        const clients = await Client.paginate({}, { page, limit: 10 });
        return res.json(clients);
    },

    //Lista um cliente por id
    async getItem(req, res) {
        const client = await Client.findById(req.params.id);
        return res.json(client);
    },

    // Cria um novo cliente
    async createItem(req, res) {
        await Client.create(req.body);
        return res.json({ sucess: true });
    },

    // Atualizar um cliente
    async updateItem(req, res) {
        const client = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(client);
    },

    //Remove um cliente
    async removeItem(req, res) {
            await Client.findByIdAndRemove(req.params.id);
            return res.json({ sucess: true });
    },
}