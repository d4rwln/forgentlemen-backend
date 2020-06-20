const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/db_gentlemen',
    {
        useNewUrlParser: true,
         useUnifiedTopology: true
    });
