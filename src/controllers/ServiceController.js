const mongoose = require('mongoose');
const { getItensOfBarbers } = require('./SchedulesController');

const Service = mongoose.model('Service');

module.exports = {
    //Lista todos os Servicees
    async getItens(req, res){
        //Inicializando paginação
        const {page=1} = req.query;
        const services = await Service.paginate({},{page, limit:10});
        return res.json(services);
    },
    
    
    //Lista todos por id do barber
    async getItensOfBarbers(req, res){
        //Inicializando paginação
        const {page=1} = req.query;
        const services = await Service.paginate({barber_id:req.params.barber_id},{page, limit:10});
        return res.json(services);
    },


    //Lista um Servicee por id
    async getItem(req, res){
        const service = await Service.findById(req.params.id);
        return res.json(service);
    },

    // Cria um novo Servicee
    async createItem(req, res){
        await Service.create(req.body);
        return res.json({sucess:true});
    },

    // Atualizar um Servicee
    async updateItem(req, res){
        const service = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true});
        return res.json(service);
    },

    //Remove um Servicee
    async removeItem(req, res){
        await Service.findByIdAndRemove(req.params.id);
        return res.json({sucess:true});
    },
}