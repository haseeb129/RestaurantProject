const mongoose = require("mongoose");

const menuSchema = mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: String,
  },
  image: {
    type: String,
  },
  userSelected: {
    type: String,
  },
  InStock: {
    type: String,
  },
});

module.exports = mongoose.model("Menu", menuSchema);
