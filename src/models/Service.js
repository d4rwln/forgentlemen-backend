const mongoose = require('mongoose');
const mongoosePaginate = require ('mongoose-paginate');

const ServiceSchema = new mongoose.Schema({
    barber_id: {type: Object, required:true },
    title: {type: String, required:true },
    description: {type: String },
    value: {type: Number, required:true },
    obs: {type: String },
    createdAt:{type: Date, default: Date.now}
    

});

ServiceSchema.plugin(mongoosePaginate);
mongoose.model("Service", ServiceSchema);