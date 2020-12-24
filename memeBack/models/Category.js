const mongoose = require('mongoose');
//Esquema
const CategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    owner: [{
        type: mongoose.Schema.Types.ObjectId,
        ref : "Item"
    }]
});

const Category = mongoose.model("Category", CategorySchema);
module.exports = Category;