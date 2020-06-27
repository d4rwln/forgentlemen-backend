const mongoose = require('mongoose');
const mongoosePaginate = require ('mongoose-paginate');

const BarberShopSchema = new mongoose.Schema({
    name: {type: String, required:true },
    tel: {type: String, required:true },
    email: {type: String, required:true }, 
    uf: {type: String, required:true },
    city: {type: String, required:true },
    pass: {type: String, required:true },
    createdAt:{type: Date, default: Date.now}
    

});

BarberShopSchema.plugin(mongoosePaginate);
mongoose.model("BarberShop", BarberShopSchema);