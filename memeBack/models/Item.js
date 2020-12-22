const mongoose = require('mongoose');
//Esquema
const ItemSchema = mongoose.Schema({
    itemId: {
        type: String,
        required: true,
        trim: true
    },
    itemId: {
        type: Number
    }
});

module.exports = mongoose.model('Commentary', ItemSchema);