const mongoose = require('mongoose');
//Esquema
const CommentarySchema = mongoose.Schema({
    commentary: {
        type: String,
        required: true,
        trim: true
    },
    itemId: {
        type: Number
    }
});

module.exports = mongoose.model('Commentary', CommentarySchema);