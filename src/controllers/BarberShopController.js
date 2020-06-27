const mongoose = require('mongoose');

const BarberShop = mongoose.model('BarberShop');

module.exports = {
    //Lista todos os barbershop
    async getItens(req, res){
        //Inicializando paginação
        const {page=1} = req.query;
        const barbers = await BarberShop.paginate({},{page, limit:10});
        return res.json(barbers);
    },

    //Lista um barbershop por id
    async getItem(req, res){
        const barber = await BarberShop.findById(req.params.id);
        return res.json(barber);
    },

    // Cria um novo barbershop
    async createItem(req, res){
        await BarberShop.create(req.body);
        return res.json({sucess:true});
    },

    // Atualizar um barbershop
    async updateItem(req, res){
        const barber = await BarberShop.findByIdAndUpdate(req.params.id, req.body, { new: true});
        return res.json(barber);
    },

    //Remove um barbershop
    async removeItem(req, res){
        await BarberShop.findByIdAndRemove(req.params.id);
        return res.json({sucess:true});
    },
}