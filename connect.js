const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/db_gentlemen',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false 
    });

// verificar se conectou com êxito
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
});