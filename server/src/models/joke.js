const mongoose = require('mongoose');

const db = mongoose.createConnection('mongodb://localhost:27017/jokes');

module.exports = db.model('jokes', 
    new mongoose.Schema({
        _id: {type: String, required: true},
        setup: {type: String},
        punchline: {type: String}
    })
);