const mongoose = require("mongoose");
//Esquema
const ItemSchema = mongoose.Schema({
  itemName: {
    type: String,
    required: true,
    trim: true
  },
  itemLink: {
    type: String
  },
  itemCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category"
  },
  itemCommentary: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Commentary"
  }]
});

const Item = mongoose.model("Item", ItemSchema);
module.exports = Item;