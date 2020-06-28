const mongoose = require('mongoose');

const BarberShop = mongoose.model('BarberShop');

module.exports = {
    //Lista todos os barbershop
    async getItens(req, res) {
        //Inicializando paginação
        try {
            const { page = 1 } = req.query;
            const barbers = await BarberShop.paginate({}, { page, limit: 10 });
            return res.json(barbers);
        } catch{
            return res.json({ sucess: false });
        }

    },

    //Lista um barbershop por id
    async getItem(req, res) {
        try {
            const barber = await BarberShop.findById(req.params.id);
            return res.json(barber);
        } catch{
            return res.json({ sucess: false });
        }

    },

    // Cria um novo barbershop
    async createItem(req, res) {
        try {
            await BarberShop.create(req.body);
            return res.json({ sucess: true });
        } catch{
            return res.json({ sucess: false });
        }
    },

    // Atualizar um barbershop
    async updateItem(req, res) {
        try {
            const barber = await BarberShop.findByIdAndUpdate(req.params.id, req.body, { new: true });
            return res.json(barber);
        } catch{
            return res.json({ sucess: false });
        }
    },

    //Remove um barbershop
    async removeItem(req, res) {
        try {
            await BarberShop.findByIdAndRemove(req.params.id);
            return res.json({ sucess: true });
        } catch{
            return res.json({ sucess: false });
        }
    },
}