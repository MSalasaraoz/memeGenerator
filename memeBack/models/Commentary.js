const mongoose = require('mongoose');
//Esquema
const CommentarySchema = mongoose.Schema({
    commentary: {
        type: String,
        required: true,
        trim: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "Item"
    }
});

const Commentary = mongoose.model("Commentary", CommentarySchema);
module.exports = Commentary;