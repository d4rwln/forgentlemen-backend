const mongoose = require('mongoose');
const mongoosePaginate = require ('mongoose-paginate');

const SchedulesSchema = new mongoose.Schema({
    client_id: {type: Object, required:true },
    barber_id: {type: Object, required:true },
    service_id: {type: Object, required:true },
    status: {type: String, required:true },
    day: {type: String, required:true },
    hour: {type: String, required:true },
    createdAt:{type: Date, default: Date.now}
    

});

SchedulesSchema.plugin(mongoosePaginate);
mongoose.model("Schedules", SchedulesSchema);