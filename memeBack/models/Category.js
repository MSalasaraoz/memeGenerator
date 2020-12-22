const mongoose = require('mongoose');
//Esquema
const CategorySchema = mongoose.Schema({
    Category: {
        type: String,
        required: true,
        trim: true
    },
    itemId: {
        type: Number
    }
});

module.exports = mongoose.model('Commentary', CategorySchema);