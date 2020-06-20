const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    name: {type: String, required:true },
    tel: {type: String, required:true },
    email: {type: String, required:true },
    uf: {type: String, required:true },
    city: {type: String, required:true },
    pass: {type: String, required:true },
    createdAt:{type: Date, default: Date.now}
    

});

mongoose.model("Client", ClientSchema);